import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDetail from "./ProductDetail";
import { getProductById } from "../services/firebase/productsService";

export default function ProductDetailContainer() {
    const { id } = useParams();

    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducto() {
            try {
                const data = await getProductById(id);
                setProducto(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducto();
    }, [id]);

    if (loading) {
        return <h2>Cargando producto...</h2>;
    }

    if (!producto) {
        return <h2>Producto no encontrado.</h2>;
    }

    return <ProductDetail producto={producto} />;
}