import React from "react";
import ImageGallery from "./ImageGallery";
import ProductDescription from "./ProductDescription";
import ProductAttributes from "./ProductAttributes";
import ProductInfo from "./ProductInfo";
import ProductBreadCrumbs from "./ProductBreadcrumbs";
import PurchaseBox from "./PurchaseBox";

const ProductDetailContent = () => {
    return (
        <div className="flex-1 py-4 bg-gray-200">
            <ProductBreadCrumbs />
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg">
                        <ImageGallery />

                        <ProductDescription />

                        <ProductAttributes />
                    </div>

                    <div className="lg:col-span-1 bg-white p-6 rounded-lg top-4">
                        <ProductInfo />

                        <PurchaseBox />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailContent;
