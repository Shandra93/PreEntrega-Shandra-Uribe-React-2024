import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css'; 

function ProductDetail() {
  const { id } = useParams();


  const producto = { id, nombre: `Producto ${id}`, descripcion: 'Descripción detallada del producto.', precio: 100 };

  return (
    <div className="product-detail">
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p className="product-price">Precio: ${producto.precio}</p>
      <Link to="/" className="btn-back">Volver</Link>
    </div>
  );
}

export default ProductDetail;
