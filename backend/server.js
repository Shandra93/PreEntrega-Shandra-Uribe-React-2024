import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";
import admin from "firebase-admin";
import { readFileSync } from "fs";

dotenv.config();

const serviceAccount = JSON.parse(
  readFileSync(new URL("./serviceAccountKey.json", import.meta.url), "utf8")
);

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

/**
 * IMPORTANTE:
 * El webhook necesita el body RAW.
 * Por eso va antes de app.use(express.json()).
 */
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const signature = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (error) {
      console.error("Webhook signature error:", error.message);
      return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    try {
      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const orderId = session.metadata.orderId;

        await fulfillOrder(orderId, session);
          console.log("Orden actualizada e inventario descontado:", orderId);

      }

      res.json({ received: true });
    } catch (error) {
      console.error("Webhook handler error:", error);
      res.status(500).json({ error: error.message });
    }
  }
);

app.use(express.json());

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { items, clientInfo } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        error: "El carrito está vacío.",
      });
    }

    if (!clientInfo?.name || !clientInfo?.email || !clientInfo?.phone) {
      return res.status(400).json({
        error: "Faltan datos del cliente.",
      });
    }

    const orderRef = db.collection("Orders").doc();

    const normalizedItems = items.map((item) => ({
      id: item.id,
      title: item.title,
      price: Number(item.price),
      quantity: Number(item.quantity),
      img: item.img || "",
    }));

    const totalPrice = normalizedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    await orderRef.set({
      items: normalizedItems,
      client: clientInfo,
      totalPrice,
      status: "pending",
      paymentStatus: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      stripeSessionId: null,
    });

    const session = await stripe.checkout.sessions.create({
  mode: "payment",

  payment_method_types: ["card"],

  customer_email: clientInfo.email,

  line_items: normalizedItems.map((item) => ({
    quantity: item.quantity,
    price_data: {
      currency: "mxn",
      product_data: {
        name: item.title,
        images: item.img ? [item.img] : [],
      },
      unit_amount: Math.round(item.price * 100),
    },
  })),

  metadata: {
    orderId: orderRef.id,
  },

  success_url: `${process.env.CLIENT_URL}/checkout/success?orderId=${orderRef.id}`,
  cancel_url: `${process.env.CLIENT_URL}/checkout/cancel?orderId=${orderRef.id}`,
});

    await orderRef.update({
      stripeSessionId: session.id,
    });

    res.json({
      url: session.url,
      orderId: orderRef.id,
    });
  } catch (error) {
    console.error("Create Checkout Session error:", error);
    res.status(500).json({
      error: error.message || "No se pudo crear la sesión de Stripe.",
    });
  }
});

async function fulfillOrder(orderId, session) {
  if (!orderId) {
    throw new Error("No orderId found in Stripe session metadata.");
  }

  const orderRef = db.collection("Orders").doc(orderId);

  await db.runTransaction(async (transaction) => {
    const orderSnapshot = await transaction.get(orderRef);

    if (!orderSnapshot.exists) {
      throw new Error("La orden no existe.");
    }

    const order = orderSnapshot.data();

    if (order.paymentStatus === "paid") {
      return;
    }

    const productRefs = order.items.map((item) =>
      db.collection("Productos").doc(item.id)
    );

    const productSnapshots = [];

    for (const productRef of productRefs) {
      const productSnapshot = await transaction.get(productRef);
      productSnapshots.push(productSnapshot);
    }

    order.items.forEach((item, index) => {
      const productSnapshot = productSnapshots[index];

      if (!productSnapshot.exists) {
        throw new Error(`El producto ${item.title} ya no existe.`);
      }

      const productData = productSnapshot.data();
      const currentStock = Number(productData.stock || 0);

      if (currentStock < item.quantity) {
        throw new Error(
          `Stock insuficiente para ${item.title}. Disponible: ${currentStock}`
        );
      }
    });

    order.items.forEach((item, index) => {
      const productRef = productRefs[index];
      const productSnapshot = productSnapshots[index];
      const productData = productSnapshot.data();

      const currentStock = Number(productData.stock || 0);
      const newStock = currentStock - item.quantity;

      transaction.update(productRef, {
        stock: newStock,
      });
    });

    transaction.update(orderRef, {
      status: "paid",
      paymentStatus: "paid",
      paidAt: admin.firestore.FieldValue.serverTimestamp(),
      stripePaymentIntentId: session.payment_intent || null,
    });
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Backend running on http://localhost:${process.env.PORT}`);
});