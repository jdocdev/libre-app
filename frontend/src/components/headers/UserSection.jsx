import { React, useState } from "react";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const UserSection = ({ authUser, setAuthUser }) => {
    const { logout, loading } = useLogout(setAuthUser);

    const [loadingAvatar, setLoadingAvatar] = useState(true);

    return (
        <div className="flex items-center gap-4 justify-end flex-shrink-0">
            {!authUser ? (
                <>
                    <Link to="/signup" className="text-gray-900 text-sm">
                        Crea tú cuenta
                    </Link>

                    <Link to="/login" className="text-gray-900 text-sm">
                        Ingresa
                    </Link>
                </>
            ) : (
                <>
                    <div className="flex flex-col items-end leading-tight">
                        <span className="text-gray-900 text-sm font-medium truncate max-w-[120px] sm:max-w-[180px]">
                            {authUser.nombre} {authUser.apellido}
                        </span>

                        <button
                            onClick={logout}
                            disabled={loading}
                            className="text-xs text-gray-700 flex items-center gap-2"
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-xs"></span>
                            ) : (
                                "Cerrar sesión"
                            )}
                        </button>
                    </div>

                    <div className="avatar relative">
                        <Link to="/profile">
                            <div className="sm:w-12 w-11 rounded-full border border-white/50 relative cursor-pointer">
                                {loadingAvatar && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full">
                                        <span className="loading loading-spinner loading-sm"></span>
                                    </div>
                                )}
                                <img
                                    src={
                                        authUser.imagenUsuario ||
                                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    }
                                    alt="Avatar del usuario"
                                    onLoad={() => setLoadingAvatar(false)}
                                    onError={() => setLoadingAvatar(false)}
                                />
                            </div>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserSection;
