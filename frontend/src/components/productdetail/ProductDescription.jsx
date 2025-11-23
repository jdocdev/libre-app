import React from "react";

const ProductDescription = ({ description }) => {
    if (!description) return null;

    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Descripción
            </h3>
            <p className="text-gray-900 leading-relaxed">{description}</p>
        </div>
    );
};

export default ProductDescription;
