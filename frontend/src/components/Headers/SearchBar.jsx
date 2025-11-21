import React from "react";

const SearchBar = () => {
    return (
        <div className="flex-1 w-full md:max-w-2xl md:px-4">
            <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
                <input
                    type="text"
                    placeholder="Buscar productos, marcas y más..."
                    className="w-full input input-bordered border-gray-300 h-12 pl-11 pr-4 focus:outline-none focus:ring-0 focus:border-azulmeli"
                />
            </div>
        </div>
    );
};

export default SearchBar;
