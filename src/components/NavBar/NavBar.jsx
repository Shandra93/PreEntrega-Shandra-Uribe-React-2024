import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

import { useCarrito } from "../../context/CarritoContext";
import CartDrawer from "../CartDrawer/CartDrawer";

import "./NavBar.css";

export default function NavBar() {
    const { carrito } = useCarrito();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const totalItems = carrito.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <>
            <nav className="barra">
                <div className="navbar-content">

                    <Link to="/" className="navbar-logo">
                        <img
                            src="/src/assets/images/logos/Foco.png"
                            alt="Super Alex Logo"
                            className="logo-image"
                        />

                        <div className="logo-text">
                            <h2>SUPER@LEX</h2>
                            <span>Smart Electronics</span>
                        </div>
                    </Link>

                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                        />
                    </div>

                    <div className="nav-links">
                        <Link to="/" className="nav-link-custom">
                            Inicio
                        </Link>

                        <Link to="/productos" className="nav-link-custom">
                            Productos
                        </Link>

                        <Link to="/nosotros" className="nav-link-custom">
                            Nosotros
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="cart-button"
                        onClick={() => setIsCartOpen(true)}
                        aria-label="Abrir carrito"
                    >
                        <FaShoppingCart />

                        {totalItems > 0 && (
                            <span className="cart-count">
                                {totalItems}
                            </span>
                        )}
                    </button>

                </div>
            </nav>

            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </>
    );
}