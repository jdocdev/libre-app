import React from "react";

const StockDetail = ({ availableQuantity }) => {
    return (
        <>
            {availableQuantity > 0 && (
                <div className="mb-6">
                    <span className="text-sm text-gray-700">
                        Stock disponible:{" "}
                        <span className="font-semibold">
                            {availableQuantity}{" "}
                            {availableQuantity === 1 ? "unidad" : "unidades"}
                        </span>
                    </span>
                </div>
            )}
        </>
    );
};

export default StockDetail;
