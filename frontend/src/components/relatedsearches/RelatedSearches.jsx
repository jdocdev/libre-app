import React from "react";

const RelatedSearches = () => {
    return (
        <div className="bg-gray-200 py-1 w-full">
            <div className="max-w-7xl mx-auto px-2 sm:px-4">
                <div className="flex items-center">
                    <span className="text-xs font-bold text-gray-700 mr-2">
                        Búsquedas relacionadas:
                    </span>
                    <div className="breadcrumbs text-xs text-gray-600">
                        <ul>
                            <li>
                                <a>iphone</a>
                            </li>
                            <li>
                                <a>apple iphone</a>
                            </li>
                            <li>iphone</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedSearches;
