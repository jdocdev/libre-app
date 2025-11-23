import React from "react";

const NoResults = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16 sm:py-20 px-4 bg-white w-full">
            <img
                src="https://http2.mlstatic.com/frontend-assets/search-nordic/not-found.svg"
                alt="Sin resultados"
                className="w-32 sm:w-40 md:w-48 mb-6 opacity-80"
            />

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 max-w-xl">
                No hay publicaciones que coincidan con tu búsqueda.
            </h3>

            <ul className="mt-4 text-xs sm:text-sm md:text-base text-gray-600 space-y-2 max-w-md">
                <li>
                    Usa <strong>términos más generales</strong> o menos
                    palabras.
                </li>
                <li>
                    <strong>Verifica la ortografía</strong> de tu búsqueda.
                </li>
            </ul>
            <a
                href="/products"
                className="mt-6 px-6 py-2 bg-none text-azulmeli rounded-md hover:bg-azulmeli-light transition"
            >
                Buscar otros productos
            </a>
        </div>
    );
};

export default NoResults;
