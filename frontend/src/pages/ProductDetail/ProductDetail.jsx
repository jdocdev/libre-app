import React from "react";
import SearchHeader from "../../components/headers/SearchHeader";
import RelatedSearches from "../../components/relatedsearches/RelatedSearches";
import ProductDetailContent from "../../components/productdetail/ProductDetailContent";

const ProductDetail = ({ authUser, setAuthUser }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <SearchHeader authUser={authUser} setAuthUser={setAuthUser} />

            <RelatedSearches />

            <ProductDetailContent />
        </div>
    );
};

export default ProductDetail;
