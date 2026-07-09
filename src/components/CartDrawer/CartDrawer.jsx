import { Link } from "react-router-dom";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useCarrito } from "../../context/CarritoContext";
import "./CartDrawer.css";

export default function CartDrawer({ isOpen, onClose }) {
    const { carrito, removeFromCarrito, clearCarrito } = useCarrito();

    const total = carrito.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <>
            <div
                className={`cart-overlay ${isOpen ? "active" : ""}`}
                onClick={onClose}
            />

            <aside className={`cart-drawer ${isOpen ? "open" : ""}`}>
                <div className="cart-drawer-header">
                    <div>
                        <h2>Tu carrito</h2>
                        <span>{carrito.length} producto(s)</span>
                    </div>

                    <button className="cart-close-btn" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                {carrito.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is empty.</p>

                        <Link
                            to="/products"
                            className="cart-shop-btn"
                            onClick={onClose}
                        >
                            Explorar productos
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="cart-drawer-items">
                            {carrito.map((item) => (
                                <div className="cart-drawer-item" key={item.id}>
                                    <img src={item.img} alt={item.title} />

                                    <div className="cart-item-info">
                                        <h3>{item.title}</h3>
                                        <p>Cantidad: {item.quantity}</p>
                                        <strong>
                                            ${item.price * item.quantity}
                                        </strong>
                                    </div>

                                    <button
                                        className="cart-remove-btn"
                                        onClick={() => removeFromCarrito(item.id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-drawer-footer">
                            <div className="cart-total-row">
                                <span>Total</span>
                                <strong>${total}</strong>
                            </div>

                            <Link
                                to="/carrito"
                                className="cart-view-btn"
                                onClick={onClose}
                            >
                                Ver carrito
                            </Link>

                            <Link
                                to="../../pages/Checkout/Checkout.jsx"
                                className="cart-checkout-btn"
                                onClick={onClose}
                            >
                                Ir a checkout
                            </Link>

                            <button
                                className="cart-clear-btn"
                                onClick={clearCarrito}
                            >
                                Vaciar carrito
                            </button>
                        </div>
                    </>
                )}
            </aside>
        </>
    );
}