import React from "react";

const ProductPriceDetail = ({
    originalPriceFormatted,
    priceFormatted,
    discount,
    installments,
}) => {
    const hasDiscount = discount && discount > 0;
    return (
        <div className="mb-6">
            {/* Precio */}
            {hasDiscount && (
                <div className="text-lg text-gray-500 line-through">
                    {originalPriceFormatted}
                </div>
            )}

            <div className="flex items-center gap-3">
                <span className="text-4xl text-gray-900">{priceFormatted}</span>

                {hasDiscount && (
                    <span className="text-base font-semibold text-green-600">
                        {discount}% OFF
                    </span>
                )}
            </div>

            {/* Cuotas */}
            {installments && (
                <div className="text-sm text-green-600 mt-2">
                    Mismo precio en {installments.quantity} cuotas de{" "}
                    {installments.amount_formatted} sin interés
                </div>
            )}

            {/* Impuestos? */}
            {installments?.rate === 0 && (
                <div className="text-xs text-gray-600 mt-1">
                    Precio sin impuestos nacionales
                </div>
            )}
        </div>
    );
};

export default ProductPriceDetail;
