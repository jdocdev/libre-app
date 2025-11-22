import React from "react";

const ProductPrice = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            <div>
                <div className="text-sm text-gray-500 line-through">
                    $ 2.399.999
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl text-gray-900">
                        $ 1.367.999
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-green-600">
                        43% OFF
                    </span>
                </div>

                <div className="text-xs sm:text-sm text-green-600">
                    Mismo precio en 12 cuotas de $ 113.999
                </div>

                <div className="text-xs sm:text-sm text-green-600 mt-1">
                    Envío gratis
                </div>

                <span className="mt-1 badge bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded w-fit">
                    Llega gratis hoy
                </span>

                <span className="mt-1 badge bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded w-fit">
                    Llega gratis mañana
                </span>

                <div className="text-sm text-gray-500 mt-2">
                    Reacondicionado
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-600">4.9</span>
                    <div className="rating rating-sm">
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-azulmeli"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-azulmeli"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-azulmeli"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-azulmeli"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-azulmeli"
                            defaultChecked
                        />
                    </div>
                    <span className="text-sm text-gray-600">(35)</span>
                </div>

                <span className="text-xs sm:text-sm text-gray-600 block mt-2">
                    Disponible en 2 colores
                </span>
            </div>
        </div>
    );
};

export default ProductPrice;
