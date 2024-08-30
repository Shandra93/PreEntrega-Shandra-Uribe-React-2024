import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonProduct from './Buttons/ButtonProduct';
import { Link } from 'react-router-dom';

export default function ItemListContainer() {
    const productos = [
        { id: 1, nombre: 'Producto1', tipo: 'Tipo1', precio: 10 },
        { id: 2, nombre: 'Producto2', tipo: 'Tipo2', precio: 20 },
        { id: 3, nombre: 'Producto3', tipo: 'Tipo3', precio: 30 },
    ];

    return (
        <div className="item-list-container">
            {productos.map((producto, index) => (
                <div className="product-card" key={index}>
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Tipo: {producto.tipo}</p>
                    <p className="card-text">Precio: ${producto.precio}</p>
                    
                    <Link to={`/product/${producto.id}`} className="btn-detail">Ver detalle</Link>
                </div>
            ))}
        </div>
    );
};
