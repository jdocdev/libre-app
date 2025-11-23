import React from "react";

const ImageGallery = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-2 order-2 lg:order-1">
                <button className="w-16 h-16 border-2 rounded justify-center items-center flex">
                    <img
                        src="https://http2.mlstatic.com/D_NQ_NP_2X_675312-MLA95675194078_102025-F.webp"
                        alt=""
                        className="h-full object-cover rounded"
                    />
                </button>
            </div>
            <div className="flex-1 order-1 lg:order-2">
                <img
                    src="https://http2.mlstatic.com/D_NQ_NP_2X_675312-MLA95675194078_102025-F.webp"
                    alt=""
                    className="w-full h-auto max-h-96 object-contain rounded-lg"
                />
            </div>
        </div>
    );
};

export default ImageGallery;
