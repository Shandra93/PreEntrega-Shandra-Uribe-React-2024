import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import ProductPage from "../pages/Products/Products";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import PurchaseSummary from "../pages/Cart/PurchaseSummary";
import ProductDetailContainer from "../components/ProductDetailContainer";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />

                    <Route path="productos" element={<ProductPage />} />
                    <Route path="productos/:id" element={<ProductDetailContainer />} />

                    <Route path="nosotros" element={<About />} />
                    <Route path="carrito" element={<Cart />} />
                    <Route path="checkout" element={<PurchaseSummary />} />

                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}