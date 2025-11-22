import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../../components/headers/AuthHeader";
import useLogin from "../../hooks/useLogin";

const Login = ({ setAuthUser }) => {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    const { login, loading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = await login({ usuario, contrasena });

        if (userData) {
            setAuthUser(userData);
            navigate("/products");
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <AuthHeader />
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
                    <div className="flex flex-col justify-start">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Ingresa tu usuario y contraseña
                        </h1>
                    </div>

                    <div className="w-full p-8 rounded-lg bg-white border border-gray-300">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="label p-2" htmlFor="usuario">
                                    <span className="text-base label-text text-gray-700 label-required">
                                        Usuario
                                    </span>
                                </label>
                                <input
                                    id="usuario"
                                    type="text"
                                    placeholder="Ingresa tu usuario"
                                    className="w-full input input-bordered border-gray-300 h-12"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                />
                            </div>

                            <div>
                                <label
                                    className="label p-2"
                                    htmlFor="contrasena"
                                >
                                    <span className="text-base label-text text-gray-700 label-required">
                                        Contraseña
                                    </span>
                                </label>
                                <input
                                    id="contrasena"
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    className="w-full input input-bordered border-gray-300 h-12"
                                    value={contrasena}
                                    onChange={(e) =>
                                        setContrasena(e.target.value)
                                    }
                                />
                            </div>

                            <button
                                className="btn bg-azulmeli text-white btn-block btn-md mt-4 border-none hover:bg-azulmeli-dark"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner loading-sm"></span>
                                ) : (
                                    "Continuar"
                                )}
                            </button>

                            <Link
                                to="/signup"
                                className="btn text-sm btn-block bg-white btn-md mt-4 shadow-none border border-none text-azulmeli hover:bg-azulmeli-light"
                            >
                                Crear cuenta
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
