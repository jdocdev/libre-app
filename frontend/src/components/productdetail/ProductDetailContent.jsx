import React from "react";
import ImageGallery from "./ImageGallery";
import ProductDescription from "./ProductDescription";
import ProductAttributes from "./ProductAttributes";
import ProductInfo from "./ProductInfo";
import ProductBreadCrumbs from "./ProductBreadcrumbs";
import PurchaseBox from "./PurchaseBox";
import ProductNotFound from "./ProductNotFound";

const ProductDetailContent = ({ product, loading, error }) => {
    // Mientras se realiza la carga del producto
    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center bg-gray-200 py-16">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    // Si termino la carga y no hay detalles del producto
    if (error || !product) {
        return (
            <div className="flex-1 flex justify-center bg-gray-200 py-8">
                <div className="max-w-7xl w-full justify-center px-4 sm:px-6">
                    <ProductNotFound />
                </div>
            </div>
        );
    }

    // SI termino la carga y hay detalles del producto
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
