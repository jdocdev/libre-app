import React from "react";

const ProductAttributes = ({ attributes }) => {
    if (!attributes || attributes.length === 0) return null;
    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Características
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {attributes.map((attr) => (
                    <div className="border-b pb-2" key={attr.id}>
                        <span className="text-sm font-semibold text-gray-600">
                            {attr.name}:
                        </span>
                        <span className="text-sm text-gray-900 ml-2">
                            {attr.value_name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductAttributes;
