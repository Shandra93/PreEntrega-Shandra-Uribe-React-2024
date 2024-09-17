import React, { useState } from 'react';
import { useCarrito } from '../Context/CarritoContext'; 
import { useNavigate } from 'react-router-dom';
import './Carrito.css';

const Carrito = () => {
  const { carrito, createOrder } = useCarrito();
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo({ ...clientInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (clientInfo.name && clientInfo.email && clientInfo.phone) {
      await createOrder(clientInfo);
      navigate('/purchaseSummary', { state: { buyer: clientInfo, items: carrito, total: carrito.reduce((total, item) => total + item.price * item.quantity, 0) } });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="Carrito-page-container">
      <h1>Este es tu carrito</h1>
      {carrito.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                <img src={item.img} alt={item.title} className="product-image" />
                <h2>{item.title}</h2>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="client-info-form">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={clientInfo.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={clientInfo.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={clientInfo.phone}
              onChange={handleInputChange}
            />
            <button type="submit">Crear Orden</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Carrito;
