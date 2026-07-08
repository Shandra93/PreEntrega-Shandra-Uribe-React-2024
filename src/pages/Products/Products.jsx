import React from 'react';
import ItemListContainer from '../components/ItemListContainer'; 
import './ProductPage.css';

export default function ProductPage() {
    return (
        <div className="product-page">
            <img className="Banner" src='src\assets\Banner.png'></img>
            <ItemListContainer />
        </div>
    );
}
