import React from "react";

const RaitingStars = ({ reviews }) => {
    if (!reviews || reviews.total === 0) return null;

    const averageRating = Math.round(reviews.rating_average || 0);

    return (
        <div className="justify-self-start">
            <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-600">
                    {reviews.rating_average?.toFixed(1) || 0}
                </span>
                <div className="rating rating-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <input
                            key={star}
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-azulmeli"
                            defaultChecked={star === averageRating}
                            disabled
                        />
                    ))}
                </div>
                <span className="text-sm text-gray-600">
                    ({reviews.total || 0})
                </span>
            </div>
            <span className="text-xs sm:text-sm text-gray-600 block mt-2">
                Disponible en {reviews.colors}{" "}
                {reviews.colors === 1 ? "color" : "colores"}
            </span>
        </div>
    );
};

export default RaitingStars;
