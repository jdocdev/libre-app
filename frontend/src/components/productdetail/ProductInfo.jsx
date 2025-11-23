import React from "react";
import ProductBadges from "../productscard/ProductBadges";

const ProductInfo = ({ product }) => {
    const conditionText = {
        new: "Nuevo",
        used: "Usado",
        refurbished: "Reacondicionado",
    };

    return (
        <div>
            {/* Estado del producto, cantidad vendida */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <span>{conditionText[product.condition]} |</span>
                <span>
                    {product.sold_quantity > 0
                        ? `+${product.sold_quantity} vendidos`
                        : "Sin ventas aún"}
                </span>
            </div>

            {/* Tienda oficial? */}
            <ProductBadges badges={product.badges} />

            <h1 className="text-xl font-normal text-gray-900 mt-4 mb-4">
                {product.title}
            </h1>

            {/* Raiting de estrellas*/}
            {product.reviews.total > 0 && (
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="text-sm text-gray-600">
                        {product.reviews.rating_average.toFixed(1)}
                    </span>

                    <div className="rating rating-sm">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                name="rating-product"
                                className="mask mask-star-2 bg-azulmeli"
                                defaultChecked={
                                    star ===
                                    Math.round(product.reviews.rating_average)
                                }
                                disabled
                            />
                        ))}
                    </div>

                    <span className="text-sm text-gray-600">
                        ({product.reviews.total})
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProductInfo;
