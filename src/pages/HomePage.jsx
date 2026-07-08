// eslint-disable-next-line no-unused-vars
import React from "react";
import {
    FaShippingFast,
    FaLock,
    FaHeadset,
    FaStar
} 

from "react-icons/fa";

import "./HomePage.css";

const HomePage = () => {
    return (
        <>
            <div className="home-page-container">
                <img
                    className="BannerInicio"
                    src="/src/assets/BannerInicio.png"
                    alt="Banner Principal"
                />
            </div>

            <section className="features">

                <h2>¿Por qué comprar con nosotros?</h2>

                <div className="cards">

                    <div className="card">
                        <FaShippingFast />
                        <h3>Envío Rápido</h3>
                        <p>Entregamos a todo México.</p>
                    </div>

                    <div className="card">
                        <FaLock />
                        <h3>Pago Seguro</h3>
                        <p>Protegemos cada compra.</p>
                    </div>

                    <div className="card">
                        <FaHeadset />
                        <h3>Soporte 24/7</h3>
                        <p>Siempre estamos para ayudarte.</p>
                    </div>

                    <div className="card">
                        <FaStar />
                        <h3>Calidad Garantizada</h3>
                        <p>Productos seleccionados cuidadosamente.</p>
                    </div>

                </div>

                <button className="btnShop">
                                       
                
                </button>

            </section>
        </>
    );
};

export default HomePage;