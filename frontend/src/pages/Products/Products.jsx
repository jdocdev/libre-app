import { React, useState } from "react";
import SearchHeader from "../../components/headers/SearchHeader";
import ProductsList from "../../components/productslist/ProductList";
import RelatedSearches from "../../components/relatedsearches/RelatedSearches";
import OrderByBar from "../../components/orderbybar/OrderByBar";
import Pagination from "../../components/pagination/Pagination";

import useProducts from "../../hooks/useProducts";

const Products = ({ authUser, setAuthUser }) => {
    const [query, setQuery] = useState("");

    const { products, loading, error } = useProducts(query);

    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <SearchHeader
                authUser={authUser}
                setAuthUser={setAuthUser}
                setQuery={setQuery}
                onReset={() => setQuery("iphone")}
            />

            <RelatedSearches />
            <OrderByBar />
            <ProductsList products={products} loading={loading} error={error} />
            <Pagination />
        </div>
    );
};

export default Products;
