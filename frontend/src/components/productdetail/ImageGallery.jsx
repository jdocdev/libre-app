import { React, useState } from "react";

const ImageGallery = ({ pictures, title }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    if (!pictures || pictures.length === 0) return null;

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            {pictures.length > 1 && (
                <div className="flex lg:flex-col gap-2 order-2 lg:order-1">
                    {pictures.map((pic, index) => (
                        <button
                            key={pic.id}
                            onClick={() => setSelectedImage(index)}
                            className={`w-16 h-16 border-2 rounded justify-center items-center flex
                                ${
                                    selectedImage === index
                                        ? "border-azulmeli"
                                        : "border-gray-200 hover:border-azulmeli"
                                }`}
                        >
                            <img
                                src={pic.url}
                                alt={`${title} - ${index + 1}`}
                                className="h-full object-cover rounded"
                            />
                        </button>
                    ))}
                </div>
            )}

            <div className="flex-1 order-1 lg:order-2">
                <img
                    src={pictures[selectedImage]?.url}
                    alt={title}
                    className="w-full h-auto max-h-96 object-contain rounded-lg"
                />
            </div>
        </div>
    );
};

export default ImageGallery;
