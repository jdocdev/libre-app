import React from "react";

const ProductPriceDetail = () => {
    return (
            <div className="mb-6">
                <div className="text-lg text-gray-500 line-through">
                    $1.299.000
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-4xl text-gray-900">$999.000</span>

                    <span className="text-base font-semibold text-green-600">
                        25% OFF
                    </span>
                </div>

                <div className="text-sm text-green-600 mt-2">
                    Mismo precio en 12 cuotas de $83.250
                </div>

                <div className="text-xs text-gray-600 mt-1">
                    Precio sin impuestos nacionales
                </div>
            </div>
    );
};

export default ProductPriceDetail;
