import React from 'react';
import ItemCounter from './Buttons/ItemCounter';
import { useCarrito } from '../Context/CarritoContext';
import './ProductDetail.css';

const ProductDetail = ({ producto }) => {
  const { addToCarrito } = useCarrito();

  if (!producto) {
    return <div>Producto no disponible</div>;
  }

  const handleAddToCart = (count) => {
    addToCarrito(producto, count);
  };

  return (
    <div className="product-detail">
      <h2>{producto.title || "Producto sin título"}</h2>
      <img 
        src={producto.img} 
        alt={producto.title || "Imagen no disponible"} 
        className="product-image" 
      />
      <p>{producto.descripcion || "Sin descripción disponible"}</p>
      <p className="product-price">Precio: ${producto.price || 0}</p>
      <ItemCounter 
        initial={1} 
        stock={producto.stock || 0} 
        onAdd={handleAddToCart} 
      />
    </div>
  );
};

export default ProductDetail;
