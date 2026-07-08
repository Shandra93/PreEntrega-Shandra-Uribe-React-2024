import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ producto }) {
    return (
        <article className="product-card">

            <div className="product-card__image">
                <img
                    src={producto.img}
                    alt={producto.title}
                />
            </div>

            <div className="product-card__content">

                <h3>{producto.title}</h3>

                <p className="product-card__price">
                    ${producto.price}
                </p>

                <Link
                    to={`/productos/${producto.id}`}
                    className="btn-primary"
                >
                    Ver producto
                </Link>

            </div>

        </article>
    );
}