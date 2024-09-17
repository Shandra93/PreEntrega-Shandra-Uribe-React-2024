import React, { useEffect, useState } from 'react';
import { db } from '../data/firebase';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import ItemCounter from './Buttons/ItemCounter';
import { useCarrito } from '../Context/CarritoContext'; 
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const { addToCarrito } = useCarrito();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoDoc = doc(db, 'Productos', id);
        const productoSnapshot = await getDoc(productoDoc);
        if (productoSnapshot.exists()) {
          setProducto({ id: productoSnapshot.id, ...productoSnapshot.data() });
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleAddToCart = (count) => {
    if (producto) {
      addToCarrito(producto, count);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <img src={producto.img} alt={producto.title} className="product-image" />
      <h2>{producto.title}</h2>
      <p>{producto.descripcion}</p>
      <p className="product-price">Precio: ${producto.price}</p>
      <ItemCounter 
        initial={1} 
        stock={producto.stock} 
        onAdd={handleAddToCart} 
      />
      {showMessage && <div className="notification">Producto agregado al carrito</div>}
      <Link to="/productos" className="btn-back">Volver</Link>
    </div>
  );
}

export default ProductDetail;
