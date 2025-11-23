import React from "react";

const ServerError = () => {
    return (
        <div className="flex-1 flex justify-center bg-gray-200 py-8">
            <div className="max-w-7xl w-full justify-center px-4 sm:px-6 flex flex-col">
                <div className="flex flex-col items-center justify-center text-center py-16 sm:py-20 px-4 bg-white w-full rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-16 sm:w-20 mb-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                        No hay productos para mostrar
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        Hubo un problema al cargar los productos. Por favor,
                        intenta de nuevo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServerError;
