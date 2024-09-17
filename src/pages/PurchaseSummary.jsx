import React from 'react';
import { useLocation } from 'react-router-dom';
import './PurchaseSummary.css';

const PurchaseSummary = () => {
  const location = useLocation();
  const { buyer, items, total } = location.state || {}; 
  const orderNumber = Math.floor(Math.random() * 1000000); 

  return (
    <div className="purchase-summary-container">
      <h1>Resumen de Compra</h1>
      
      <div className="buyer-info">
        <h2>Datos del comprador</h2>
        <p><strong>Nombre:</strong> {buyer.name}</p>
        <p><strong>Email:</strong> {buyer.email}</p>
        <p><strong>Teléfono:</strong> {buyer.phone}</p>
      </div>

      <div className="items-summary">
        <h2>Productos comprados:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="item">
              <img src={item.img} alt={item.name} className="item-image" />
              <div className="item-details">
                <p><strong>{item.name}</strong></p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price * item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-price">
        <h2>Total a pagar: ${total}</h2>
      </div>

      <div className="order-info">
        <p>Tu fecha de envío será de 3 - 5 días después de la compra.</p>
        <p><strong>Número de pedido:</strong> {orderNumber}</p>
      </div>
    </div>
  );
};

export default PurchaseSummary;
