import { React, useEffect, useState } from "react";

import { normalizeProduct } from "../utils/normalizeProduct";

const useProducts = (query) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            setError(false);

            try {
                // Si no hay query, usar "iphone" por defecto
                const searchQuery = query || "iphone";
                const res = await fetch(
                    `/api/products/search?q=${searchQuery}`
                );
                const data = await res.json();

                // Normalizar salida
                const items = Array.isArray(data)
                    ? data
                    : Array.isArray(data?.results)
                    ? data.results
                    : [];

                // Limitar a 3 productos si es búsqueda por defecto
                const limitedItems = !query ? items.slice(0, 3) : items;

                // Normalizar productos para que tengan el mismo formato en todas las cards
                const normalizedProducts = limitedItems.map(normalizeProduct);
                setProducts(normalizedProducts);
            } catch {
                setError(true);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [query]);

    return { products, loading, error };
};

export default useProducts;
