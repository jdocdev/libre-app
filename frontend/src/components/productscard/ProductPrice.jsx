import React from "react";
import RaitingStars from "./RaitingStars";

const ProductPrice = ({
    priceOriginal,
    priceWithDiscount,
    discount,
    installments,
    shipping,
    condition,
    reviews,
}) => {
    const hasDiscount = discount && discount > 0;
    const isFreeShipping = shipping?.free_shipping;
    const isRefurbished = condition === "refurbished" || condition === "used";

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            <div>
                {/* Precio original tachado - solo si hay descuento */}
                {hasDiscount && (
                    <div className="text-sm text-gray-500 line-through">
                        {priceOriginal}
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl text-gray-900">
                        {hasDiscount ? priceWithDiscount : priceOriginal}
                    </span>
                    {/* Porcentaje OFF - solo si hay descuento */}
                    {hasDiscount && (
                        <span className="text-xs sm:text-sm font-semibold text-green-600">
                            {discount}% OFF
                        </span>
                    )}
                </div>

                {/* Cuotas si no hay pordefecto seran 12 */}
                {installments && (
                    <div className="text-xs sm:text-sm text-green-600">
                        Mismo precio en {installments.quantity} cuotas de{" "}
                        {installments.amount_formatted}
                    </div>
                )}

                {/* Envío gratis */}
                {isFreeShipping && (
                    <div className="text-xs sm:text-sm text-green-600 mt-1">
                        Envío gratis
                    </div>
                )}

                {/* Llega gratis hoy */}
                {isFreeShipping && (
                    <span className="mt-1 badge bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded w-fit">
                        Llega gratis hoy
                    </span>
                )}

                {/* Reacondicionado */}
                {isRefurbished && (
                    <div className="text-sm text-gray-500 mt-2">
                        Reacondicionado
                    </div>
                )}
            </div>

            <RaitingStars reviews={reviews} />
        </div>
    );
};

export default ProductPrice;
