import React from "react";
import { useParams } from "react-router-dom";
import SearchHeader from "../../components/headers/SearchHeader";
import RelatedSearches from "../../components/relatedsearches/RelatedSearches";
import ProductDetailContent from "../../components/productdetail/ProductDetailContent";
import useProductDetail from "../../hooks/useProductDetail";

const ProductDetail = ({ authUser, setAuthUser }) => {
    // para obtener el ID del producto desde la URL
    const { id } = useParams();

    console.log("ID del producto:", id);

    const { product, loading, error } = useProductDetail(id);

    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <SearchHeader authUser={authUser} setAuthUser={setAuthUser} />

            <RelatedSearches />

            <ProductDetailContent
                product={product}
                loading={loading}
                error={error}
            />
        </div>
    );
};

export default ProductDetail;
