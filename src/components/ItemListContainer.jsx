import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonProduct from './Buttons/ButtonProduct';
import { Link } from 'react-router-dom';

export default function ItemListContainer() {
    const productos = [
        { id: 1, nombre: 'Taza', precio: 10 },
        { id: 2, nombre: 'Playera', precio: 20 },
        { id: 3, nombre: 'Termo', precio: 30 },
        { id: 4, nombre: 'Tarjetero', precio: 40 },
        { id: 5, nombre: 'Chamarra', precio: 50 },
    ];

    return (
        <div className="item-list-container">
            {productos.map((producto, index) => (
                <div className="product-card" key={index}>
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Precio: ${producto.precio}</p>
                    
                    <Link to={`/product/${producto.id}`} className="btn-detail">Ver detalle</Link>
                </div>
            ))}
        </div>
    );
};
