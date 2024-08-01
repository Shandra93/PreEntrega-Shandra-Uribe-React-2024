import 'bootstrap/dist/css/bootstrap.min.css';
import './ButtonProduct.css';

/* eslint-disable react/prop-types */
export default function ButtonProduct({ nombre, tipo }) {

    const classNames = `btn boton boton-${tipo}`;

        const handleClick = () => {
        alert(`Este producto es el ${nombre}`)
    }

    return (
        <button onClick = {handleClick} className={classNames}>
            {nombre}
        </button>
    );
}