import React, { useState } from "react";

const OrderByBar = ({ sort, onSortChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const sortOptions = [
        { value: "relevance", label: "Más relevantes" },
        { value: "price_asc", label: "Precio: menor a mayor" },
        { value: "price_desc", label: "Precio: mayor a menor" },
    ];

    const currentLabel =
        sortOptions.find((option) => option.value === sort)?.label ||
        "Más relevantes";

    const handleSortChange = (newSort) => {
        onSortChange(newSort);
        setIsOpen(false);
    };

    return (
        <div className="bg-gray-200 py-3 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-end">
                <div className="sm:flex items-center justify-end">
                    <div className="relative">
                        <button
                            type="button"
                            className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900"
                            aria-label="Ordenar por"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="text-xs font-bold">
                                Ordenar por:{" "}
                            </span>
                            <span className="font-medium">{currentLabel}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className={`w-4 h-4 transition-transform ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() =>
                                            handleSortChange(option.value)
                                        }
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderByBar;
