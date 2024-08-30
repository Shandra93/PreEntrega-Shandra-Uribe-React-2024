import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CounterComponent.css';

export default function CounterComponent() {
    const [counter, setCounter] = useState(1);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    const minusClick = () => {
        setCounter((prevCounter) => {
            return prevCounter > 0 ? prevCounter - 1 : 0;
        });
    }

    return (
        <section className="counter-section">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            <p>{counter}</p>
        </section>
    );
}