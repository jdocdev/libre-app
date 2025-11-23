import React from "react";

const ProductBreadcrumbs = () => {
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
                            <li>
                                <a className="hover:underline cursor-pointer text-azulmeli">
                                    Celulares y Teléfonos
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline cursor-pointer text-azulmeli">
                                    Celulares y Smartphones
                                </a>
                            </li>
                            <li>
                                <a className="hover:underline cursor-pointer text-azulmeli">
                                    Apple iPhone
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBreadcrumbs;
