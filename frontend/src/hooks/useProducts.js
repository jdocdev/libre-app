import { React, useEffect, useState } from "react";
import { getApiUrl } from "../config/api";

import { normalizeProduct } from "../utils/normalizeProduct";

const useProducts = (query, offset = 0, limit = 2, sort = "relevance") => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [paging, setPaging] = useState({ total: 0, offset: 0, limit: 2 });

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            setError(false);

            try {
                // Si no hay query, usar "iphone" por defecto
                const searchQuery = query || "iphone";
                const res = await fetch(
                    getApiUrl(
                        `/products/search?q=${searchQuery}&offset=${offset}&limit=${limit}&sort=${sort}`
                    )
                );
                const data = await res.json();

                // Normalizar salida
                const items = Array.isArray(data)
                    ? data
                    : Array.isArray(data?.results)
                    ? data.results
                    : [];

                // Normalizar productos para que tengan el mismo formato en todas las cards
                const normalizedProducts = items.map(normalizeProduct);
                setProducts(normalizedProducts);
                setPaging(data.paging || { total: 0, offset: 0, limit: 2 });
            } catch {
                setError(true);
                setProducts([]);
                setPaging({ total: 0, offset: 0, limit: 2 });
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [query, offset, limit, sort]);

    return { products, loading, error, paging };
};

export default useProducts;
