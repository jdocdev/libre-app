import React from "react";
import ProductBadges from "../productscard/ProductBadges";

const ProductInfo = () => {
    return (
        <div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <span>Nuevo |</span>
                <span>+5 vendidos</span>
            </div>

            {/* mas adelante hay que pasar el indicador real */}
            <ProductBadges badges={{ official_store: true }} />

            <h1 className="text-xl font-normal text-gray-900 mt-4 mb-4">
                Apple iPhone 13 (128 GB) - Azul
            </h1>

            {/* La verdad es que en este punto me doy cuenta de que tengo componentes de la card de productos que debi hacer mas reutilizables, pero creo que por ahora esta bien si me queda tiempo puedo trabajar en eso, porque me tocaria repensar algunos elementos de la card de productos, ademas de que siento que me limita de cierta forma el mock aun cuando trate de normalizarlo*/}
            <div>
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="text-sm text-gray-600">4.8</span>

                    <div className="rating rating-sm">
                        <input
                            type="radio"
                            name="rating"
                            className="mask mask-star-2 bg-azulmeli"
                        />
                        <input
                            type="radio"
                            name="rating"
                            className="mask mask-star-2 bg-azulmeli"
                        />
                        <input
                            type="radio"
                            name="rating"
                            className="mask mask-star-2 bg-azulmeli"
                        />
                        <input
                            type="radio"
                            name="rating"
                            className="mask mask-star-2 bg-azulmeli"
                        />
                        <input
                            type="radio"
                            name="rating"
                            className="mask mask-star-2 bg-azulmeli"
                        />
                    </div>

                    <span className="text-sm text-gray-600">(35)</span>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
