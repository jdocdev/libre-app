import React from "react";

import ProductBadges from "./ProductBadges";
import ProductSeller from "./ProductSeller";
import ProductPrice from "./ProductPrice";

const ProductsCard = ({ product }) => {

    return (
        <>
            <div className="flex flex-col lg:flex-row items-start gap-6 p-4 sm:p-6 border border-gray-200 bg-white">
                <img
                    alt={product.title}
                    src={product.thumbnail}
                    className="w-full sm:w-48 lg:w-44 rounded-lg object-cover flex-shrink-0"
                />

                <div className="flex flex-col gap-2 w-full">
                    <ProductBadges badges={product.badges} />

                    <p className="text-md font-bold text-gray-900">
                        {product.brand}
                    </p>

                    <h3 className="text-md text-gray-900">
                        {product.title}
                        {product.officialStoreId}
                    </h3>

                    <ProductSeller
                        badges={product.badges}
                        ratingStars={product.reviews}
                    />

                    <ProductPrice
                        priceOriginal={product.price_formatted}
                        priceWithDiscount={
                            product.price_with_discount_formatted
                        }
                        discount={product.discount}
                        installments={product.installments}
                        shipping={product.shipping}
                        condition={product.condition}
                        reviews={product.reviews}
                    />
                </div>
            </div>
        </>
    );
};

export default ProductsCard;
