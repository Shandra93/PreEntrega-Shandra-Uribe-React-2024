import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../Context/CarritoContext';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';
import './Buttons/ButtonComponent.css';

export default function NavBar() {
    const { carrito } = useCarrito(); 
    const totalItems = carrito.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar navbar-expand-lg navbar-light barra">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-logo">
                    <img src='src/assets/Foco.png' alt="Logo" className="logo-image" />
                </Link>
                <div className="nav-links">
                    <Link to="/nosotros" className="btn btn-nosotros">Nosotros</Link>
                    <Link to="/productos" className="btn btn-productos">Productos</Link>
                    <Link to="/" className="btn btn-home">Home</Link>
                </div>
                <Link to="/carrito" className="btn btn-cart">
                    <FaShoppingCart size={50} />
                    {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                </Link>
            </div>
        </nav>
    );
}
