import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Buttons/ButtonComponent";


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light barra">
            <div className="container-fluid">
                <Link to="/" className="navbar-logo">
                    <img src='src/assets/Foco.png' alt="Logo" className="logo-image" />
                </Link>
                <Link to="/nosotros" className="btn btn-nosotros">Nosotros</Link>
                <Link to="/productos" className="btn btn-productos">Productos</Link>
                <Link to="/" className="btn btn-home">Home</Link>
            </div>
        </nav>
    );
}
