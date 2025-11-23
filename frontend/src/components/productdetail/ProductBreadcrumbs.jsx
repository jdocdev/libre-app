import React from "react";
import { useNavigate } from "react-router-dom";

const ProductBreadcrumbs = () => {
    const navigate = useNavigate();

    const breadcrumbs = [
        { label: "Celulares y Teléfonos", query: "iphone" },
        { label: "Celulares y Smartphones", query: "iphone" },
        { label: "Apple iPhone", query: "iphone" },
    ];

    const handleBreadcrumbClick = (query) => {
        navigate(`/products?q=${encodeURIComponent(query)}`);
    };

    return (
        <div className="w-full py-2">
            <div className="max-w-7xl mx-auto px-2 sm:px-4">
                <div className="flex items-center gap-2 text-[13px]">
                    <button
                        className="text-azulmeli hover:underline font-normal"
                        onClick={() => window.history.back()}
                    >
                        Volver
                    </button>

                    <span className="text-gray-400">|</span>

                    <div className="breadcrumbs">
                        <ul className="flex items-center gap-1">
                            {breadcrumbs.map((crumb, index) => (
                                <li key={index} className="flex items-center gap-1">
                                    {index > 0 && <span className="text-gray-400"></span>}
                                    <a
                                        className="hover:underline cursor-pointer text-azulmeli"
                                        onClick={() => handleBreadcrumbClick(crumb.query)}
                                    >
                                        {crumb.label}
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

export default ProductBreadcrumbs;
