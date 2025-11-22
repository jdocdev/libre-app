import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../../components/headers/AuthHeader";
import useSignup from "../../hooks/useSignup";

const SignUp = ({ setAuthUser }) => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        usuario: "",
        contrasena: "",
        confirmarContrasena: "",
    });

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = await signup(inputs);

        if (newUser) {
            setAuthUser(newUser);
            navigate("/");
        }
    };

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
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="label p-2" htmlFor="nombre">
                                    <span className="text-sm label-text text-gray-700 label-required">
                                        Nombre
                                    </span>
                                </label>
                                <input
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                    className="w-full text-sm input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                                    value={inputs.nombre}
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            nombre: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <label className="label p-2" htmlFor="apellido">
                                    <span className="text-sm label-text text-gray-700 label-required">
                                        Apellido
                                    </span>
                                </label>
                                <input
                                    id="apellido"
                                    type="text"
                                    placeholder="Ingresa tu apellido"
                                    className="w-full input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                                    value={inputs.apellido}
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            apellido: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <label className="label p-2" htmlFor="usuario">
                                    <span className="text-sm label-text text-gray-700 label-required">
                                        Usuario
                                    </span>
                                </label>
                                <input
                                    id="usuario"
                                    type="text"
                                    placeholder="Elige tu usuario"
                                    className="w-full text-sm input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                                    value={inputs.usuario}
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            usuario: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <label
                                    className="label p-2"
                                    htmlFor="contrasena"
                                >
                                    <span className="text-sm label-text text-gray-700 label-required">
                                        Contraseña
                                    </span>
                                </label>
                                <input
                                    id="contrasena"
                                    type="password"
                                    placeholder="Crea una contraseña"
                                    className="w-full text-sm input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                                    value={inputs.contrasena}
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            contrasena: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <label
                                    className="label p-2"
                                    htmlFor="confirmarContrasena"
                                >
                                    <span className="text-sm label-text text-gray-700 label-required">
                                        Confirmar Contraseña
                                    </span>
                                </label>
                                <input
                                    id="confirmarContrasena"
                                    type="password"
                                    placeholder="Confirma tu contraseña"
                                    className="w-full text-sm input input-bordered border-gray-300 h-12 focus:outline-none focus:ring-0 focus:border-azulmeli"
                                    value={inputs.confirmarContrasena}
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            confirmarContrasena: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <button
                                    className="btn text-sm bg-azulmeli text-white btn-block btn-md mt-6 border-none hover:bg-azulmeli-dark"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="loading loading-spinner loading-sm"></span>
                                    ) : (
                                        "Crear cuenta"
                                    )}
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
