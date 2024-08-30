import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light barra">
            <div className="container-fluid">
                <Link to="/" className="navbar-logo"> <img src='src/assets/Foco.png' alt="Logo" className="logo-image" /></Link>
                <Link to="/nosotros" className="btn-nosotros">Nosotros</Link>
                <Link to="/productos" className="btn-productos">Productos</Link>
                <Link to="/" className="btn-home">Home</Link>
            </div>
        </nav>
    );
}
