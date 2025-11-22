import React from "react";
import SearchHeader from "../../components/headers/Header";
import RelatedSearches from "../../components/relatedsearches/RelatedSearches";

const ProductDetail = ({ authUser, setAuthUser }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <SearchHeader authUser={authUser} setAuthUser={setAuthUser} />

            <RelatedSearches />

        </div>
    );
};

export default ProductDetail;
