import React from "react";
import SearchHeader from "../../components/headers/SearchHeader";
import ProductsList from "../../components/productslist/ProductList";
import RelatedSearches from "../../components/relatedsearches/RelatedSearches";
import OrderByBar from "../../components/orderbybar/OrderByBar";
import Pagination from "../../components/pagination/Pagination";

import useProducts from "../../hooks/useProducts";
import useSearch from "../../hooks/useSearch";

const Products = ({ authUser, setAuthUser }) => {
    const { query, onSearch } = useSearch(false, true);

    const { products, loading, error } = useProducts(query);

    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <SearchHeader
                authUser={authUser}
                setAuthUser={setAuthUser}
                onSearch={onSearch}
            />

            <RelatedSearches />
            <OrderByBar />
            <ProductsList products={products} loading={loading} error={error} />
            <Pagination />
        </div>
    );
};

export default Products;
