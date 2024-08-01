import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonProduct from './ButtonProduct';

export default function ItemListContainer() {
    return (
        <div className="item-list-container">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Productos</h5>
                    <ButtonProduct nombre="Producto1" tipo="Producto1"/>                    
                </div>
            </div>
        </div>
    );
}
