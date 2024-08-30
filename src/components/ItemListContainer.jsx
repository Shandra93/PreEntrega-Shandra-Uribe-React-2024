import React from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../data/products';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemListContainer() {
  return (
    <div className="item-list-container">
      {productos.map((producto) => (
        <div className="product-card" key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} className="product-image" />
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Precio: ${producto.precio}</p>
          <Link to={`/product/${producto.id}`} className="btn-detail">Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}
