import React from "react";

const ButtonsDetail = () => {
    return (
        <div className="space-y-3">
            <button className="w-full py-3 bg-azulmeli text-white font-semibold rounded hover:bg-blue-700 transition-colors">
                Comprar ahora
            </button>
            <button className="w-full py-3 bg-blue-100 text-azulmeli font-semibold rounded hover:bg-blue-200 transition-colors">
                Agregar al carrito
            </button>
        </div>
    );
};

export default ButtonsDetail;
