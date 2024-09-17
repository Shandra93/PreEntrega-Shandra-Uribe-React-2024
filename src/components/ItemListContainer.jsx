import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../data/firebase';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosCollection = collection(db, 'Productos'); 
        const productosSnapshot = await getDocs(productosCollection);
        const productosList = productosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
          /*console.log("Productos obtenidos:", productosList);*/        
          setProductos(productosList);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="item-list-container">
      {productos.map((producto) => (
        <div className="product-card" key={producto.id}>
          <img src={producto.img} alt={producto.title} className="product-image" />
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text">Precio: ${producto.price}</p>
          <Link to={`/product/${producto.id}`} className="btn-detail">Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}
