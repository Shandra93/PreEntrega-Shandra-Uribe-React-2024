import 'bootstrap/dist/css/bootstrap.min.css';
/* eslint-disable react/prop-types */
export default function ButtonComponent({ nombre, tipo }) {

    const classNames = `btn boton boton-${tipo}`;

        const handleClick = () => {
        alert(`Estas en la seccion de ${nombre}`)
    }

    return (
        <button onClick = {handleClick} className={classNames}>
            {nombre}
        </button>
    );
}