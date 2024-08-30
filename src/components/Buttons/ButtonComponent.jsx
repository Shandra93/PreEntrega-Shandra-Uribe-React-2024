// src/components/Buttons/ButtonComponent.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function ButtonComponent({ nombre, tipo }) {

    // Ajustar las rutas según el tipo de botón
    const route = tipo === "Nosotros" ? "/nosotros" : "/productos";
    const classNames = `btn btn-${tipo.toLowerCase()}`;

    return (
        <Link to={route} className={classNames}>
            {nombre}
        </Link>
    );
}
