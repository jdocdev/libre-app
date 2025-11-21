import React from "react";
import SearchHeader from "../../components/Headers/Header";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <SearchHeader />

            <div className="bg-gray-200 py-1 w-full">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                    <div className="flex items-center">
                        <span className="text-xs font-bold text-gray-700 mr-2">
                            Búsquedas relacionadas:
                        </span>
                        <div className="breadcrumbs text-xs text-gray-600">
                            <ul>
                                <li>
                                    <a>iphone</a>
                                </li>
                                <li>
                                    <a>apple iphone</a>
                                </li>
                                <li>iphone</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 py-3 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="hidden sm:flex items-center justify-end">
                        <button
                            type="button"
                            className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900"
                            aria-label="Ordenar por"
                        >
                            <span className="text-xs font-bold">
                                Ordenar por
                            </span>
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

            <div className="flex-1 flex justify-center bg-gray-200 py-8">
                <div className="max-w-7xl w-full px-4 sm:px-6 flex flex-col gap-[1px]">
                    <div className="flex flex-col lg:flex-row items-start gap-6 p-4 sm:p-6 border border-gray-200 bg-white">
                        <img
                            alt="iPhone 13"
                            src="https://http2.mlstatic.com/D_NQ_NP_2X_967525-MLA96152875583_102025-F.webp"
                            className="w-full sm:w-48 lg:w-44 rounded-lg object-cover flex-shrink-0"
                        />

                        <div className="flex flex-col gap-2">
                            <span className="badge bg-black text-white text-xs font-semibold px-3 py-1 rounded w-fit">
                                APPLE TIENDA OFICIAL
                            </span>

                            <p className="text-md font-bold text-gray-900">
                                Apple
                            </p>

                            <h3 className="text-md text-gray-900">
                                iPhone 13 (128 GB) - Medianoche - Distribuidor
                                Autorizado - Distribuidor Autorizado
                            </h3>

                            <p className="text-sm text-gray-900 flex items-center gap-1">
                                Por Apple
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4 text-azulmeli"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </p>

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
                                        <span className="text-sm text-gray-600">
                                            4.9
                                        </span>
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
                                        <span className="text-sm text-gray-600">
                                            (35)
                                        </span>
                                    </div>

                                    <span className="text-xs sm:text-sm text-gray-600 block mt-2">
                                        Disponible en 2 colores
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start gap-6 p-4 sm:p-6 border border-gray-200 bg-white">
                        <img
                            alt="iPhone 13"
                            src="https://http2.mlstatic.com/D_NQ_NP_2X_967525-MLA96152875583_102025-F.webp"
                            className="w-full sm:w-48 lg:w-44 rounded-lg object-cover flex-shrink-0"
                        />

                        <div className="flex flex-col gap-2">
                            <span className="badge bg-black text-white text-xs font-semibold px-3 py-1 rounded w-fit">
                                APPLE TIENDA OFICIAL
                            </span>

                            <p className="text-md font-bold text-gray-900">
                                Apple
                            </p>

                            <h3 className="text-md text-gray-900">
                                iPhone 13 (128 GB) - Medianoche - Distribuidor
                                Autorizado - Distribuidor Autorizado
                            </h3>

                            <p className="text-sm text-gray-900 flex items-center gap-1">
                                Por Apple
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4 text-azulmeli"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </p>

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
                                        <span className="text-sm text-gray-600">
                                            4.9
                                        </span>
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
                                        <span className="text-sm text-gray-600">
                                            (35)
                                        </span>
                                    </div>

                                    <span className="text-xs sm:text-sm text-gray-600 block mt-2">
                                        Disponible en 2 colores
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 pt-2 pb-4 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center border border-azulmeli bg-white text-gray-900 rounded hover:bg-azulmeli hover:text-white text-sm font-semibold">
                            1
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                            2
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                            3
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                            4
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                            5
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                            6
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                            7
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                            8
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                            9
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 text-sm font-semibold">
                            10
                        </button>
                        <button className="flex items-center gap-1 text-gray-400 hover:text-gray-900 text-sm font-semibold px-2">
                            Siguiente
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
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
