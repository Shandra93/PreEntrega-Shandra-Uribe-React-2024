import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../data/firebase';
import { doc, getDoc } from 'firebase/firestore';
import ProductDetail from './ProductDetail'; 

const ProductDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoDoc = doc(db, 'Productos', id);
        const productoSnapshot = await getDoc(productoDoc);
        if (productoSnapshot.exists()) {
          setProducto({ id: productoSnapshot.id, ...productoSnapshot.data() });
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
      }
    };
    fetchProducto();
  }, [id]);

  return producto ? <ProductDetail producto={producto} /> : <div>Producto no encontrado</div>;
};

export default ProductDetailContainer;
