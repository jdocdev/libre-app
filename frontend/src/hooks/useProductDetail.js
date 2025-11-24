import { useEffect, useState } from "react";
import { getApiUrl } from "../config/api";
import { normalizeProductDetail } from "../utils/normaliceProductDetail";

const useProductDetail = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadProductDetail = async () => {
            if (!id) {
                setError(true);
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(false);

            try {
                const res = await fetch(getApiUrl(`/products/items/${id}`));

                if (!res.ok) {
                    setError(true);
                    setProduct(null);
                    return;
                }

                const data = await res.json();
                const normalizedProduct = normalizeProductDetail(data);
                setProduct(normalizedProduct);
            } catch {
                setError(true);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        loadProductDetail();
    }, [id]);

    return { product, loading, error };
};

export default useProductDetail;
