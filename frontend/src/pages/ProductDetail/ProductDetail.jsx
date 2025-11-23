import React from "react";
import { useParams } from "react-router-dom";
import SearchHeader from "../../components/headers/SearchHeader";
import RelatedSearches from "../../components/relatedsearches/RelatedSearches";
import ProductDetailContent from "../../components/productdetail/ProductDetailContent";
import useProductDetail from "../../hooks/useProductDetail";
import useSearch from "../../hooks/useSearch";

const ProductDetail = ({ authUser, setAuthUser }) => {
    // para obtener el ID del producto desde la URL
    const { id } = useParams();

    const { product, loading, error } = useProductDetail(id);

    const { onSearch } = useSearch(true);

    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <SearchHeader
                authUser={authUser}
                setAuthUser={setAuthUser}
                onSearch={onSearch}
            />

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
