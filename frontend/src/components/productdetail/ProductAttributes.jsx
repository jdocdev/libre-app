import React from "react";

const ProductAttributes = () => {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Características
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border-b pb-2">
                    <span className="text-sm font-semibold text-gray-600">
                        Marca:
                    </span>
                    <span className="text-sm text-gray-900 ml-2">
                        Marca Ejemplo
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductAttributes;
