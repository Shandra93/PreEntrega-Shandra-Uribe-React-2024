import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import "./CheckoutCancel.css";

export default function CheckoutCancel() {
    return (
        <main className="checkout-cancel-page">
            <section className="checkout-cancel-card">
                <FaTimesCircle className="cancel-icon" />

                <h1>Pago cancelado</h1>

                <p>
                    Tu compra no fue completada. Puedes volver al carrito e intentarlo nuevamente.
                </p>

                <div className="cancel-actions">
                    <Link to="/carrito" className="cancel-primary-btn">
                        Volver al carrito
                    </Link>

                    <Link to="/productos" className="cancel-secondary-btn">
                        Seguir comprando
                    </Link>
                </div>
            </section>
        </main>
    );
}