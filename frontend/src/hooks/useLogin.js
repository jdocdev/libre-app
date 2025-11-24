import { useState } from "react";
import toast from "react-hot-toast";
import { getApiUrl } from "../config/api";

const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const login = async ({ usuario, contrasena }) => {
        const isValid = handleInputErrors(usuario, contrasena);
        if (!isValid) return null;

        setLoading(true);
        try {
            const res = await fetch(getApiUrl("/auth/login"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuario, contrasena }),
                credentials: "include",
            });

            const data = await res.json();

            if (!res.ok || data.error) {
                throw new Error(data.error || "Credenciales incorrectas");
            }

            // localStorage para mantener la sesión iniciada
            localStorage.setItem("user", JSON.stringify(data));

            return data;
        } catch (error) {
            toast.error(error.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { login, loading };
};

function handleInputErrors(usuario, contrasena) {
    if (!usuario || !contrasena) {
        toast.error("Por favor completa todos los campos.");
        return false;
    }
    return true;
}

export default useLogin;
