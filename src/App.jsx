import './App.css';
import { CarritoProvider } from './Context/CarritoContext'; 
import NavBar from './components/NavBar';
import ProductDetail from './components/ProductDetail'; 
import Nosotros from './pages/nosotros'; 
import Productos from './pages/ProductPage'; 
import HomePage from './pages/HomePage';
import PurchaseSummary from './pages/PurchaseSummary';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrito from './pages/Carrito';

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} /> 
            <Route path="/carrito" element={<Carrito />} /> 
            <Route path="/PurchaseSummary" element={<PurchaseSummary />} /> 
          </Routes>
        </div>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
