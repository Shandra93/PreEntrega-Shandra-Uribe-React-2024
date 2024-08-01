import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemListContainer() {
    return (
        <div className="item-list-container">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Productos</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Producto 1</li>
                        <li className="list-group-item">Producto 2</li>
                        <li className="list-group-item">Producto 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
