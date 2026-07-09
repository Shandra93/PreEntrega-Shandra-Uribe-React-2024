import { Link } from "react-router-dom";
import {
    FaHeart,
    FaShoppingCart,
    FaStar
} from "react-icons/fa";

import { useCarrito } from "../../context/CarritoContext";
import toast from "react-hot-toast";

import "./ProductCard.css";

export default function ProductCard({ producto }) {

    const { addToCarrito } = useCarrito();

    const handleAddToCart = () => {
    addToCarrito(producto, 1);
    toast.success(`${producto.title} Added to cart!`, {
        position: "top-right",
        duration: 2000,
    });
};

    return (

        <article className="product-card">

            <span className="badge">Nuevo</span>

            <button className="favorite-btn">
                <FaHeart />
            </button>

            <div className="product-image-container">

                <img
                    src={producto.img}
                    alt={producto.title}
                    className="product-image"
                />

            </div>

            <div className="product-info">

                <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>4.8</span>
                </div>

                <h3>{producto.title}</h3>

                <p className="price">
                    ${producto.price}
                </p>

                <button
                    className="btn-cart"
                    onClick={handleAddToCart}
                >
                    <FaShoppingCart />
                    Agregar al carrito
                </button>

                <Link
                    to={`/productos/${producto.id}`}
                    className="btn-detail"
                >
                    Ver detalles →
                </Link>

            </div>

        </article>

    );
}