import React from 'react'

const OrderByBar = () => {
  return (
    <div className="bg-gray-200 py-3 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="hidden sm:flex items-center justify-end">
                    <button
                        type="button"
                        className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900"
                        aria-label="Ordenar por"
                    >
                        <span className="text-xs font-bold">Ordenar por</span>
                        <span className="font-medium">Más relevantes</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default OrderByBar