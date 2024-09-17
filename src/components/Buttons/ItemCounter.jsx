import React, { useState } from 'react';
import './ItemCounter.css';

function ItemCounter({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-counter">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCounter;
