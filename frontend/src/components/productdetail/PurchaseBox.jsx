import React from "react";
import ProductPriceDetail from "./ProductPriceDetail";
import FreeShippingDetail from "./FreeShippingDetail";
import StockDetail from "./StockDetail";
import ButtonsDetail from "./ButtonsDetail";
import WarrantyDetail from "./WarrantyDetail";

const PurchaseBox = () => {
    return (
        <div>
            {/* Precios */}
            <ProductPriceDetail />

            {/* Envío Gratis */}
            <FreeShippingDetail />

            {/* Stock */}
            <StockDetail />

            {/* Botones de compra */}
            <ButtonsDetail />

            {/* Garantía */}
            <WarrantyDetail />
        </div>
    );
};

export default PurchaseBox;
