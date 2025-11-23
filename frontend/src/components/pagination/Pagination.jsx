import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="bg-gray-200 pt-2 pb-4 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-center gap-2">
                    {pages.map((page) => (
                        <button
                            key={page}
                            className={`w-8 h-8 flex items-center justify-center border rounded text-sm font-semibold ${
                                page === currentPage
                                    ? "border-azulmeli bg-azulmeli text-white"
                                    : "border-azulmeli bg-white text-gray-900 hover:bg-azulmeli hover:text-white"
                            }`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                    {currentPage < totalPages && (
                        <button
                            className="flex items-center gap-1 text-gray-400 hover:text-gray-900 text-sm font-semibold px-2"
                            onClick={() => onPageChange(currentPage + 1)}
                        >
                            Siguiente
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pagination;
