import React from "react";
import ProductPriceDetail from "./ProductPriceDetail";
import FreeShippingDetail from "./FreeShippingDetail";
import StockDetail from "./StockDetail";
import ButtonsDetail from "./ButtonsDetail";
import WarrantyDetail from "./WarrantyDetail";

const PurchaseBox = ({ product }) => {
    return (
        <div>
            {/* Precios */}
            <ProductPriceDetail
                originalPriceFormatted={product.original_price_formatted}
                priceFormatted={product.price_formatted}
                discount={product.discount}
                installments={product.installments}
            />

            {/* Envío Gratis */}
            <FreeShippingDetail
                shipping={product.shipping}
                sellerAddress={product.seller_address}
            />

            {/* Stock */}
            <StockDetail availableQuantity={product.available_quantity} />

            {/* Botones de compra */}
            <ButtonsDetail />

            {/* Garantía */}
            <WarrantyDetail warranty={product.warranty} />
        </div>
    );
};

export default PurchaseBox;
