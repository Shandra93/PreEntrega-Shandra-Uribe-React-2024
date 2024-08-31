import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productos } from '../data/products';
import './ProductDetail.css';
import "./Buttons/ButtonProduct";

function ProductDetail() {
  const { id } = useParams();
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <img src={producto.imagen} alt={producto.nombre} className="product-image" />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p className="product-price">Precio: ${producto.precio}</p>
      <Link to="/productos" className="btn-back">Volver</Link>
    </div>
  );
}

export default ProductDetail;
