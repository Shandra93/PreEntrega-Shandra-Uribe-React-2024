import './App.css';
import NavBar from './components/NavBar';
import ProductDetail from './components/ProductDetail'; 
import Nosotros from './pages/nosotros'; 
import Productos from './pages/ProductPage'; 
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
