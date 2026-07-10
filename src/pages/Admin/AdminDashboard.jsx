import { useEffect, useMemo, useState } from "react";
import {
    collection,
    getDocs,
    orderBy,
    query,
} from "firebase/firestore";

import {
    FaBox,
    FaChartLine,
    FaDollarSign,
    FaExclamationTriangle,
    FaReceipt,
} from "react-icons/fa";

import { db } from "../../services/firebase/firebase";
import "./AdminDashboard.css";

export default function AdminDashboard() {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDashboardData() {
            try {
                const ordersQuery = query(
                    collection(db, "Orders"),
                    orderBy("createdAt", "desc")
                );

                const productsQuery = query(collection(db, "Productos"));

                const [ordersSnapshot, productsSnapshot] = await Promise.all([
                    getDocs(ordersQuery),
                    getDocs(productsQuery),
                ]);

                const ordersData = ordersSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                const productsData = productsSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setOrders(ordersData);
                setProducts(productsData);
            } catch (error) {
                console.error("Error cargando dashboard:", error);
            } finally {
                setLoading(false);
            }
        }

        loadDashboardData();
    }, []);

    const paidOrders = useMemo(() => {
        return orders.filter((order) => order.paymentStatus === "paid");
    }, [orders]);

    const totalSales = useMemo(() => {
        return paidOrders.reduce(
            (total, order) => total + Number(order.totalPrice || 0),
            0
        );
    }, [paidOrders]);

    const totalItemsSold = useMemo(() => {
        return paidOrders.reduce((total, order) => {
            const orderItems = order.items || [];

            const itemsCount = orderItems.reduce(
                (sum, item) => sum + Number(item.quantity || 0),
                0
            );

            return total + itemsCount;
        }, 0);
    }, [paidOrders]);

    const lowStockProducts = useMemo(() => {
        return products.filter((product) => Number(product.stock || 0) <= 3);
    }, [products]);

    const formatDate = (timestamp) => {
        if (!timestamp?.toDate) return "Sin fecha";

        return timestamp.toDate().toLocaleDateString("es-MX", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (loading) {
        return (
            <main className="admin-page">
                <h1>Cargando dashboard...</h1>
            </main>
        );
    }

    return (
        <main className="admin-page">
            <section className="admin-header">
                <div>
                    <span>Panel administrativo</span>
                    <h1>Ventas e inventario</h1>
                </div>
            </section>

            <section className="admin-stats-grid">
                <article className="admin-stat-card">
                    <div className="admin-stat-icon">
                        <FaDollarSign />
                    </div>

                    <div>
                        <span>Total vendido</span>
                        <strong>${totalSales}</strong>
                    </div>
                </article>

                <article className="admin-stat-card">
                    <div className="admin-stat-icon">
                        <FaReceipt />
                    </div>

                    <div>
                        <span>Órdenes pagadas</span>
                        <strong>{paidOrders.length}</strong>
                    </div>
                </article>

                <article className="admin-stat-card">
                    <div className="admin-stat-icon">
                        <FaChartLine />
                    </div>

                    <div>
                        <span>Productos vendidos</span>
                        <strong>{totalItemsSold}</strong>
                    </div>
                </article>

                <article className="admin-stat-card warning">
                    <div className="admin-stat-icon">
                        <FaExclamationTriangle />
                    </div>

                    <div>
                        <span>Stock bajo</span>
                        <strong>{lowStockProducts.length}</strong>
                    </div>
                </article>
            </section>

            <section className="admin-layout">
                <div className="admin-panel">
                    <div className="admin-panel-header">
                        <h2>Últimas órdenes</h2>
                    </div>

                    <div className="admin-table-wrapper">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Orden</th>
                                    <th>Cliente</th>
                                    <th>Total</th>
                                    <th>Pago</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.slice(0, 10).map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id.slice(0, 8)}...</td>
                                        <td>
                                            {order.client?.name ||
                                                order.name ||
                                                "Sin cliente"}
                                        </td>
                                        <td>${order.totalPrice || 0}</td>
                                        <td>
                                            <span
                                                className={`status-badge ${
                                                    order.paymentStatus === "paid"
                                                        ? "paid"
                                                        : "pending"
                                                }`}
                                            >
                                                {order.paymentStatus || "pending"}
                                            </span>
                                        </td>
                                        <td>{formatDate(order.createdAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="admin-panel">
                    <div className="admin-panel-header">
                        <h2>Inventario</h2>
                    </div>

                    <div className="inventory-list">
                        {products.map((product) => (
                            <article
                                className={`inventory-item ${
                                    Number(product.stock || 0) <= 3
                                        ? "low"
                                        : ""
                                }`}
                                key={product.id}
                            >
                                <div className="inventory-image">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                    />
                                </div>

                                <div>
                                    <h3>{product.title}</h3>
                                    <p>${product.price}</p>
                                </div>

                                <strong>
                                    <FaBox />
                                    {product.stock ?? 0}
                                </strong>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}