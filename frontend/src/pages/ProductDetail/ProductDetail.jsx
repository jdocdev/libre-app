import React from "react";
import SearchHeader from "../../components/Headers/Header";

const ProductDetail = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <SearchHeader />
            <div className="flex-1 flex items-center justify-center bg-gray-200">
                DETALLES DE PRODUCTO
            </div>
        </div>
    );
};

export default ProductDetail;
