import React from "react";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
                <div className="flex flex-col justify-start">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Ingresa tu usuario y contraseña para iniciar sesión
                    </h1>
                </div>

                <div className="w-full p-8 rounded-lg bg-white border border-gray-300">
                    <form>
                        <div>
                            <label className="label p-2">
                                <span className="text-base label-text text-gray-700">
                                    Usuario
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Ingresa tu usuario"
                                className="w-full input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                            />
                        </div>

                        <div>
                            <label className="label p-2">
                                <span className="text-base label-text text-gray-700">
                                    Contraseña
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                className="w-full input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                            />
                        </div>

                        <div>
                            <button className="btn bg-azulmeli text-white btn-block btn-md mt-4 border-none hover:bg-azulmeli-dark">
                                Continuar
                            </button>
                        </div>

                        <a
                            href="#"
                            className="btn btn-block bg-white btn-md mt-4 shadow-none border border-azulmeli text-azulmeli hover:bg-azulmeli-light"
                        >
                            Crear cuenta
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
