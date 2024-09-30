import React, { useState } from 'react';
import './ItemCounter.css'

const ItemCounter = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count); 
    setCount(initial); 
  };

  return (
    <div className="item-counter">
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCounter;
