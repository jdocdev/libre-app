import React from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../../components/Headers/AuthHeader";

const SignUp = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <AuthHeader />
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-md px-6 py-12">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            Crea tu cuenta y compra con envíos gratis
                        </h1>
                    </div>

                    <div className="w-full p-8 rounded-lg bg-white border border-gray-300">
                        <form>
                            <div>
                                <label className="label p-2">
                                    <span className="text-sm label-text text-gray-700">
                                        Nombre
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                    className="w-full text-sm input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                                />
                            </div>

                            <div>
                                <label className="label p-2">
                                    <span className="text-sm label-text text-gray-700">
                                        Apellido
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ingresa tu apellido"
                                    className="w-full input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                                />
                            </div>

                            <div>
                                <label className="label p-2">
                                    <span className="text-sm label-text text-gray-700">
                                        Usuario
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Elige tu usuario"
                                    className="w-full text-sm input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                                />
                            </div>

                            <div>
                                <label className="label p-2">
                                    <span className="text-sm label-text text-gray-700">
                                        Contraseña
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Crea una contraseña"
                                    className="w-full text-sm input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                                />
                            </div>

                            <div>
                                <label className="label p-2">
                                    <span className="text-sm label-text text-gray-700">
                                        Confirmar Contraseña
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirma tu contraseña"
                                    className="w-full text-sm input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                                />
                            </div>

                            <div>
                                <button className="btn text-sm bg-azulmeli text-white btn-block btn-md mt-6 border-none hover:bg-azulmeli-dark">
                                    Crear cuenta
                                </button>
                            </div>

                            <Link
                                to={"/login"}
                                className="btn text-sm btn-block bg-white btn-md mt-4 shadow-none border border-none text-azulmeli hover:bg-azulmeli-light"
                            >
                                Tengo cuenta
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
