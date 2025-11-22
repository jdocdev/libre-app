import React from "react";

import ProductBadges from "./ProductBadges";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

const ProductsCard = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-start gap-6 p-4 sm:p-6 border border-gray-200 bg-white">
                <img
                    alt="iPhone 13"
                    src="https://http2.mlstatic.com/D_NQ_NP_2X_967525-MLA96152875583_102025-F.webp"
                    className="w-full sm:w-48 lg:w-44 rounded-lg object-cover flex-shrink-0"
                />

                <div className="flex flex-col gap-2">

                    <ProductBadges />

                    <p className="text-md font-bold text-gray-900">Apple</p>

                    <h3 className="text-md text-gray-900">
                        iPhone 13 (128 GB) - Medianoche - Distribuidor
                        Autorizado - Distribuidor Autorizado
                    </h3>

                    <ProductRating />

                    <ProductPrice />
                </div>
            </div>
        </>
    );
};

export default ProductsCard;
