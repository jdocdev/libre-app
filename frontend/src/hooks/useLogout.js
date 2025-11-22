import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

const useLogout = (setAuthUser) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const logout = async () => {
        setLoading(true);

        try {
            await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            // limpiar frontend
            localStorage.removeItem("user");

            // actualizar estado global
            setAuthUser(null);

            // redirigir al login
            navigate("/login");
        } catch (error) {
            toast.error("Logout error:", error);
        } finally {
            setLoading(false);
        }
    };

    return { logout, loading };
};

export default useLogout;
