import 'bootstrap/dist/css/bootstrap.min.css';
/* eslint-disable react/prop-types */
export default function ButtonComponent({ nombre, tipo }) {

    const classNames = `btn boton boton-${tipo}`;

    return (
        <button className={classNames}>
            {nombre}
        </button>
    );
}