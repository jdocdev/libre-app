import React from "react";

const Pagination = () => {
    return (
        <div className="bg-gray-200 pt-2 pb-4 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center border border-azulmeli bg-white text-gray-900 rounded hover:bg-azulmeli hover:text-white text-sm font-semibold">
                        1
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                        2
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                        3
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                        4
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                        5
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                        6
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                        7
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                        8
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                        9
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                        10
                    </button>
                    <button className="flex items-center gap-1 text-gray-400 hover:text-gray-900 text-sm font-semibold px-2">
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
                </div>
            </div>
        </div>
    );
};

export default Pagination;
