import React from "react";
import SearchHeader from "../../components/headers/Header";
import RelatedSearches from "../../components/relatedsearches/RelatedSearches";
import ProductsCard from "../../components/productscard/ProductsCard.jsx";
import OrderByBar from "../../components/orderbybar/OrderByBar";
import Pagination from "../../components/pagination/Pagination.jsx";
import ProductsList from "../../components/productslist/ProductList.jsx";

const Products = ({ authUser, setAuthUser }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <SearchHeader authUser={authUser} setAuthUser={setAuthUser} />

            <RelatedSearches />

            <OrderByBar />

            <ProductsList />

            <Pagination />
        </div>
    );
};

export default Products;
