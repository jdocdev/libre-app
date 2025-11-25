import React from "react";
import { useNavigate } from "react-router-dom";

const RelatedSearches = () => {
    const navigate = useNavigate();

    const relatedSearches = [
        { label: "iphone 15", query: "iphone" },
        { label: "iphone 14", query: "iphone" },
        { label: "iphone 12", query: "iphone" },
        { label: "iphone 13 pro", query: "iphone" },
    ];

    const handleSearchClick = (query) => {
        navigate(`/products?q=${encodeURIComponent(query)}`);
    };

    return (
        <div className="bg-gray-200 py-2 w-full">
            <div className="max-w-7xl mx-auto px-2 sm:px-4">
                <div className="flex items-center flex-wrap">
                    <span className="text-xs font-bold text-gray-700 mr-2 whitespace-nowrap">
                        Búsquedas relacionadas:
                    </span>
                    <div className="text-xs text-gray-600 w-full sm:w-auto overflow-x-auto">
                        <ul className="flex items-center gap-1 sm:gap-2 min-w-max">
                            {relatedSearches.map((search, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-1 sm:gap-2"
                                >
                                    {index > 0 && (
                                        <span className="text-gray-400">-</span>
                                    )}
                                    <a
                                        className="hover:underline cursor-pointer text-gray-600 text-xs sm:text-sm px-1"
                                        onClick={() =>
                                            handleSearchClick(search.query)
                                        }
                                    >
                                        {search.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedSearches;
