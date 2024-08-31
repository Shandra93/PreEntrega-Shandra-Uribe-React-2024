import React from 'react';
import ItemListContainer from '../components/ItemListContainer'; 
import './ProductPage.css';

export default function ProductPage() {
    return (
        <div className="product-page">
            <h2>P R O D U C T O S</h2>
            <ItemListContainer />
        </div>
    );
}
