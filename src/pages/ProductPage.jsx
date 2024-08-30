import React from 'react';
import ItemListContainer from '../components/ItemListContainer'; 
import './ProductPage.css';

export default function ProductPage() {
    return (
        <div className="product-page">
            <h2>Productos</h2>
            <ItemListContainer />
        </div>
    );
}
