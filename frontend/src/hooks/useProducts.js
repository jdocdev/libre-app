import { React, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { normalizeProduct } from "../utils/normalizeProduct";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);

            try {
                const res = await fetch("/api/products/search?q=iphone");
                const data = await res.json();

                // Normalizar salida
                const items = Array.isArray(data)
                    ? data
                    : Array.isArray(data?.results)
                    ? data.results
                    : [];

                // setProducts(items);

                // Normalizar productos para que tengan el mismo formato en todas las cards
                const normalizedProducts = items.map((normalizeProduct));
                setProducts(normalizedProducts);

            } catch (error) {
                toast.error("Error al cargar productos", error.message);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return { products, loading };
};

export default useProducts;
