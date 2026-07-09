import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ producto }) {

    return (

        <article className="product-card">
            <span className="badge">Nuevo</span>
            <div className="product-image-container">
                <img
                    src={producto.img}
                    alt={producto.title}
                    className="product-image"
                />
            </div>

            <div className="product-info">
                <h3>{producto.title}</h3>
                <p className="price">
                    ${producto.price}
                </p>
                <Link
                    to={`/productos/${producto.id}`}
                    className="btn-product"
                >
                    Ver producto
                </Link>

            </div>

        </article>
    );
}