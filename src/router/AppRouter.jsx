import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetailContainer from "../components/ProductDetailContainer";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";

// Futuras páginas
// import Success from "../pages/Success/Success";
// import Cancel from "../pages/Cancel/Cancel";
// import NotFound from "../pages/NotFound/NotFound";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />

                    <Route path="Products" element={<Products />} />
                    <Route path="Products/:id" element={<ProductDetailContainer />} />

                    <Route path="About" element={<About />} />

                    <Route path="Cart" element={<Cart />} />

                    <Route path="Checkout" element={<Checkout />} />

                    {/* Stripe */}
                    {/* <Route path="checkout/success" element={<Success />} /> */}
                    {/* <Route path="checkout/cancel" element={<Cancel />} /> */}

                    {/* Página 404 */}
                    {/* <Route path="*" element={<NotFound />} /> */}

                </Route>

            </Routes>
        </BrowserRouter>
    );
}