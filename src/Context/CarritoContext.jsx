import React, { createContext, useState, useContext } from 'react';
import { db } from '../data/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addToCarrito = (producto, quantity) => {
    setCarrito(prevCarrito => {
      const existingProduct = prevCarrito.find(item => item.id === producto.id);
      if (existingProduct) {
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCarrito, { ...producto, quantity }];
    });
  };

  const removeFromCarrito = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
  };

  const clearCarrito = () => {
    setCarrito([]);
  };

  const createOrder = async (clientInfo) => {
    try {
      const orderData = {
        items: carrito,
        totalPrice: carrito.reduce((total, item) => total + item.price * item.quantity, 0),
        createdAt: new Date(),
        client: clientInfo,
        shipmentNumber: Math.floor(Math.random() * 1000000)
      };
      const orderCollection = collection(db, 'Orders');
      await addDoc(orderCollection, orderData);
      clearCarrito();
      console.log('Datos de la orden:', orderData);
    } catch (error) {
      console.error('Error al crear la orden:', error);
      alert('Error al crear la orden');
    }
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCarrito, removeFromCarrito, clearCarrito, createOrder }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
