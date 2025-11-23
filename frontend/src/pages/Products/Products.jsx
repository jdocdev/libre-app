import React, { useState } from "react";
import SearchHeader from "../../components/headers/SearchHeader";
import ProductsList from "../../components/productslist/ProductList";
import RelatedSearches from "../../components/relatedsearches/RelatedSearches";
import OrderByBar from "../../components/orderbybar/OrderByBar";
import Pagination from "../../components/pagination/Pagination";

import useProducts from "../../hooks/useProducts";
import useSearch from "../../hooks/useSearch";

const Products = ({ authUser, setAuthUser }) => {
    const { query, offset, limit, onSearch, onPageChange } = useSearch(false, true);
    const [sort, setSort] = useState('relevance');

    const { products, loading, error, paging } = useProducts(query, offset, limit, sort);

    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <SearchHeader
                authUser={authUser}
                setAuthUser={setAuthUser}
                onSearch={onSearch}
            />

            <RelatedSearches />
            <OrderByBar sort={sort} onSortChange={setSort} />
            <ProductsList products={products} loading={loading} error={error} />
            <Pagination
                currentPage={Math.floor(offset / limit) + 1}
                totalPages={Math.ceil(paging.total / limit)}
                onPageChange={(page) => onPageChange((page - 1) * limit)}
            />
        </div>
    );
};

export default Products;
