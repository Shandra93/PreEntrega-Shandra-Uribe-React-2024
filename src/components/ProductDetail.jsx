import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css'; 

const productos = [
  { id: '1', nombre: 'Producto A', descripcion: 'Descripción detallada del Producto A.', precio: 100 },
  { id: '2', nombre: 'Producto B', descripcion: 'Descripción detallada del Producto B.', precio: 200 },
  { id: '3', nombre: 'Producto C', descripcion: 'Descripción detallada del Producto C.', precio: 300 },
  { id: '4', nombre: 'Producto D', descripcion: 'Descripción detallada del Producto D.', precio: 400 },
  { id: '5', nombre: 'Producto E', descripcion: 'Descripción detallada del Producto E.', precio: 500 },
];

function ProductDetail() {
  const { id } = useParams();
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

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
