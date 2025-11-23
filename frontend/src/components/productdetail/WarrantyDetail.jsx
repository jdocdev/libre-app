import React from "react";

const WarrantyDetail = () => {
    return (
        <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-start gap-2">
                <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                    />
                </svg>

                <div>
                    <p className="text-sm font-semibold text-gray-900">
                        Garantía
                    </p>

                    <p className="text-sm text-gray-600">
                        12 meses de garantía del fabricante
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WarrantyDetail;
