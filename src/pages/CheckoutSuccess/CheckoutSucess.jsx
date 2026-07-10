import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import { useCarrito } from "../../context/CarritoContext";

import "./CheckoutSuccess.css";

export default function CheckoutSuccess() {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get("orderId");

    const { clearCarrito } = useCarrito();

    useEffect(() => {
        clearCarrito();
    }, [clearCarrito]);

    return (
        <main className="checkout-success-page">
            <section className="checkout-success-card">
                <FaCheckCircle className="success-icon" />

                <h1>¡Compra realizada con éxito!</h1>

                <p>
                    Tu orden fue creada correctamente. Gracias por comprar en Super@lex.
                </p>

                {orderId && (
                    <div className="order-box">
                        <span>Número de orden</span>
                        <strong>{orderId}</strong>
                    </div>
                )}

                <div className="success-actions">
                    <Link to="/productos" className="success-primary-btn">
                        Seguir comprando
                    </Link>

                    <Link to="/" className="success-secondary-btn">
                        Volver al inicio
                    </Link>
                </div>
            </section>
        </main>
    );
}