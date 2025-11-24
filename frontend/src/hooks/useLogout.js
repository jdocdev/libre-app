import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApiUrl } from "../config/api";

import toast from "react-hot-toast";

const useLogout = (setAuthUser) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const logout = async () => {
        setLoading(true);

        try {
            await fetch(getApiUrl("/auth/logout"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });

            // limpiar frontend
            localStorage.removeItem("user");

            // actualizar estado global
            setAuthUser(null);

            // redirigir al login
            navigate("/login");
        } catch (error) {
            toast.error("Error al cerrar sesión:", error);
        } finally {
            setLoading(false);
        }
    };

    return { logout, loading };
};

export default useLogout;
