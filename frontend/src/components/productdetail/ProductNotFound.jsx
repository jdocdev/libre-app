import React from "react";
import { useNavigate } from "react-router-dom";

const ProductNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center text-center py-16 sm:py-20 px-4 bg-white w-full">
            <img
                src="https://http2.mlstatic.com/frontend-assets/search-nordic/not-found.svg"
                alt="Producto no encontrado"
                className="w-32 sm:w-40 md:w-48 mb-6 opacity-80"
            />

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 max-w-xl">
                No encontramos el producto que buscas
            </h3>

            <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-600 max-w-md">
                Es posible que el producto ya no esté disponible o que el enlace
                sea incorrecto.
            </p>

            <button
                onClick={() => navigate("/products")}
                className="mt-6 px-6 py-2 bg-azulmeli text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
            >
                Volver a productos
            </button>
        </div>
    );
};

export default ProductNotFound;
