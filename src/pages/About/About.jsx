import React from 'react';
import './Nosotros.css';


export default function Nosotros() {
    return (
        <div className="nosotros-container">
            <h1 className="nosotros-title">Sobre Nosotros</h1>
            <div className="nosotros-content">
                <section className="nosotros-section">
                    <h2>Misión</h2>
                    <p>
                        En Super@lex, nuestra misión es proporcionar productos de alta calidad y un excelente servicio al cliente.
                        Estamos comprometidos con la satisfacción de nuestros clientes y trabajamos continuamente para mejorar nuestros productos y servicios.
                    </p>
                </section>
                <section className="nosotros-section">
                    <h2>Visión</h2>
                    <p>
                        Nuestra visión es ser la empresa líder en el sector, ofreciendo soluciones innovadoras y sostenibles para nuestros clientes.
                        Queremos ser reconocidos por nuestra calidad, compromiso y responsabilidad social.
                    </p>
                </section>
                <section className="nosotros-section">
                    <h2>Equipo</h2>
                    <p>
                        Contamos con un equipo de profesionales altamente capacitados y apasionados por lo que hacen.
                        Cada miembro de nuestro equipo contribuye con su experiencia y habilidades para lograr nuestros objetivos comunes.
                    </p>
                </section>
            </div>
        </div>
    );
}
