import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCreditCard, FaLock, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";

import { useCarrito } from "../../context/CarritoContext";
import "./PurchaseSummary.css";

export default function PurchaseSummary() {
    const navigate = useNavigate();
    const { carrito, createOrder } = useCarrito();

    const [clientInfo, setClientInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
    });

    const subtotal = carrito.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const envio = subtotal > 0 ? 99 : 0;
    const total = subtotal + envio;

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setClientInfo({
            ...clientInfo,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fieldsAreComplete = Object.values(clientInfo).every(
            (value) => value.trim() !== ""
        );

        if (!fieldsAreComplete) {
            toast.error("Completa todos los campos para continuar");
            return;
        }

        if (carrito.length === 0) {
            toast.error("Tu carrito está vacío");
            navigate("/products");
            return;
        }

        try {
            await createOrder(clientInfo);

            toast.success("Orden creada correctamente");

            navigate("/", {
                state: {
                    buyer: clientInfo,
                    total,
                },
            });
        } catch (error) {
            console.error(error);
            toast.error("No se pudo crear la orden");
        }
    };

    if (carrito.length === 0) {
        return (
            <main className="checkout-page">
                <section className="checkout-empty">
                    <h1>No hay productos para pagar</h1>
                    <p>
                        Agrega productos a tu carrito antes de continuar al checkout.
                    </p>

                    <Link to="/products" className="checkout-primary-link">
                        Explorar productos
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="checkout-page">
            <section className="checkout-header">
                <div>
                    <span>Checkout seguro</span>
                    <h1>Finaliza tu compra</h1>
                </div>

                <Link to="/carrito" className="checkout-back-link">
                    <FaArrowLeft />
                    Volver al carrito
                </Link>
            </section>

            <section className="checkout-layout">
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="checkout-form-title">
                        <FaUser />
                        <div>
                            <h2>Datos del cliente</h2>
                            <p>Ingresa tus datos para crear la orden.</p>
                        </div>
                    </div>

                    <div className="form-grid">
                        <div className="form-group">
                            <label>Nombre completo</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Ej. Shandra Uribe"
                                value={clientInfo.name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="correo@email.com"
                                value={clientInfo.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Teléfono</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="55 1234 5678"
                                value={clientInfo.phone}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Código postal</label>
                            <input
                                type="text"
                                name="zipCode"
                                placeholder="00000"
                                value={clientInfo.zipCode}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group full">
                            <label>Dirección</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Calle, número, colonia"
                                value={clientInfo.address}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group full">
                            <label>Ciudad</label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Ciudad"
                                value={clientInfo.city}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="checkout-security">
                        <FaLock />
                        <span>
                            Tus datos se usan únicamente para procesar tu compra.
                        </span>
                    </div>

                    <button className="checkout-submit-button" type="submit">
                        <FaCreditCard />
                        Crear orden
                    </button>
                </form>

                <aside className="checkout-summary">
                    <h2>Resumen del pedido</h2>

                    <div className="checkout-items">
                        {carrito.map((item) => (
                            <div className="checkout-item" key={item.id}>
                                <img src={item.img} alt={item.title} />

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>Cantidad: {item.quantity}</p>
                                </div>

                                <strong>
                                    ${item.price * item.quantity}
                                </strong>
                            </div>
                        ))}
                    </div>

                    <div className="checkout-summary-divider" />

                    <div className="checkout-row">
                        <span>Subtotal</span>
                        <strong>${subtotal}</strong>
                    </div>

                    <div className="checkout-row">
                        <span>Envío</span>
                        <strong>${envio}</strong>
                    </div>

                    <div className="checkout-total">
                        <span>Total</span>
                        <strong>${total}</strong>
                    </div>

                    <p className="stripe-note">
                        Próximo paso: conectar este botón con Stripe Checkout.
                    </p>
                </aside>
            </section>
        </main>
    );
}