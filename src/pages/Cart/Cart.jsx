import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaArrowLeft, FaCreditCard } from "react-icons/fa";
import { useCarrito } from "../../context/CarritoContext";
import "./Cart.css";

export default function Cart() {
    const { carrito, removeFromCarrito, clearCarrito } = useCarrito();
    const navigate = useNavigate();

    const subtotal = carrito.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
    );

    const envio = subtotal > 0 ? 99 : 0;
    const total = subtotal + envio;

    const handleGoToCheckout = () => {
        navigate("/checkout", {
            state: {
                items: carrito,
                subtotal,
                envio,
                total,
            },
        });
    };

    if (carrito.length === 0) {
        return (
            <main className="cart-page">
                <section className="cart-empty-page">
                    <h1>Tu carrito está vacío</h1>

                    <p>
                        Agrega productos a tu carrito y vuelve aquí para finalizar tu compra.
                    </p>

                    <Link to="/productos" className="cart-primary-link">
                        Explorar productos
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="cart-page">
            <section className="cart-header">
                <div>
                    <span>Carrito de compras</span>
                    <h1>Revisa tus productos</h1>
                </div>

                <Link to="/productos" className="cart-back-link">
                    <FaArrowLeft />
                    Seguir comprando
                </Link>
            </section>

            <section className="cart-layout">
                <div className="cart-products">
                    {carrito.map((item) => {
                        const itemSubtotal = Number(item.price) * item.quantity;

                        return (
                            <article className="cart-item" key={item.id}>
                                <div className="cart-item-image">
                                    <img src={item.img} alt={item.title} />
                                </div>

                                <div className="cart-item-info">
                                    <h2>{item.title}</h2>
                                    <p>Precio unitario: ${item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                </div>

                                <div className="cart-item-total">
                                    <span>Subtotal</span>
                                    <strong>${itemSubtotal}</strong>
                                </div>

                                <button
                                    className="cart-remove-button"
                                    onClick={() => removeFromCarrito(item.id)}
                                    aria-label="Eliminar producto"
                                    type="button"
                                >
                                    <FaTrash />
                                </button>
                            </article>
                        );
                    })}
                </div>

                <aside className="cart-summary">
                    <h2>Resumen de compra</h2>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <strong>${subtotal}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Envío</span>
                        <strong>${envio}</strong>
                    </div>

                    <div className="summary-divider" />

                    <div className="summary-total">
                        <span>Total</span>
                        <strong>${total}</strong>
                    </div>

                    <button
                        className="checkout-button"
                        onClick={handleGoToCheckout}
                        type="button"
                    >
                        <FaCreditCard />
                        Ir a checkout
                    </button>

                    <button
                        className="clear-cart-button"
                        onClick={clearCarrito}
                        type="button"
                    >
                        Vaciar carrito
                    </button>
                </aside>
            </section>
        </main>
    );
}