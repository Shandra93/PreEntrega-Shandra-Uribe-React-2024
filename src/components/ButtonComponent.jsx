/* eslint-disable react/prop-types */
export default function ButtonComponent({ nombre, tipo }) {
    // Construye las clases CSS dinámicamente
    const classNames = `btn boton boton-${tipo}`;

    return (
        <button className={classNames}>
            {nombre}
        </button>
    );
}