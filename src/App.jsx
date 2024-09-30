import './App.css';
import { CarritoProvider } from './Context/CarritoContext'; 
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import PurchaseSummary from './pages/PurchaseSummary';
import Nosotros from './pages/Nosotros'; 
import Productos from './pages/ProductPage'; 
import Carrito from './pages/Carrito';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './components/ProductDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailContainer />} />
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
