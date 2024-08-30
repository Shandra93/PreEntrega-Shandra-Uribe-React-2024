import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './ButtonComponent.css';  // Asegúrate de que la ruta es correcta

export default function ButtonComponent({ nombre, tipo }) {

    const route = tipo === "Nosotros" ? "/nosotros" : "/productos";
    const classNames = `btn btn-${tipo.toLowerCase()}`;

    return (
        <Link to={route} className={classNames}>
            {nombre}
        </Link>
    );
}
