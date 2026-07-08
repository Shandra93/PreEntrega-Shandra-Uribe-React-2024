import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Nosotros from "../pages/Nosotros";
import Carrito from "../pages/Carrito";
import PurchaseSummary from "../pages/PurchaseSummary";
import ProductDetailContainer from "../components/ProductDetailContainer";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<HomePage />} />

                    <Route path="/productos" element={<ProductPage />} />

                    <Route path="/productos/:id" element={<ProductDetailContainer />} />

                    <Route path="/nosotros" element={<Nosotros />} />

                    <Route path="/carrito" element={<Carrito />} />

                    <Route path="/checkout" element={<PurchaseSummary />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}