import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import ProductPage from "../pages/Products/Products";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import CheckoutSuccess from "../pages/CheckoutSuccess/CheckoutSucess";
import CheckoutCancel from "../pages/CheckoutCancel/CheckoutCancel";
import ProductDetailContainer from "../components/ProductDetailContainer";
import AdminDashboard from "../pages/Admin/AdminDashboard";

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

                    <Route path="checkout" element={<Checkout />} />
                    <Route path="checkout/Success" element={<CheckoutSuccess />} />
                    <Route path="checkout/Cancel" element={<CheckoutCancel />} />

                    <Route path="admin" element={<AdminDashboard />} />

                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}