import { React, useState } from "react";
import toast from "react-hot-toast";

import { passwordRegex } from "../utils/validators.js";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({
        nombre,
        apellido,
        usuario,
        contrasena,
        confirmarContrasena,
    }) => {
        const success = handleInputErrors({
            nombre,
            apellido,
            usuario,
            contrasena,
            confirmarContrasena,
        });

        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    usuario: usuario,
                    contrasena: contrasena,
                    confirmacionContrasena: confirmarContrasena,
                }),
            });

            const data = await res.json();

            // En caso de que el mensaje no exista en el front mostrar el error del back
            if (!res.ok) {
                toast.error(data.error || "Hubo un error.");
                return;
            }

            if(data.error){
                throw new Error(data.error);
            }
            
            // localStorage - Sin Context - Sin Zustand



        } catch (error) {
            toast.error(error.message || "Error al crear la cuenta.");
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

function handleInputErrors({
    nombre,
    apellido,
    usuario,
    contrasena,
    confirmarContrasena,
}) {
    if (
        !nombre ||
        !apellido ||
        !usuario ||
        !contrasena ||
        !confirmarContrasena
    ) {
        toast.error("Por favor, completa todos los campos.");
        return false;
    }

    if( usuario)

    if (contrasena !== confirmarContrasena) {
        toast.error("Las contraseñas no coinciden.");
        return false;
    }

    if (!passwordRegex.test(contrasena)) {
        toast.error(
            "La contraseña debe tener mínimo 8 caracteres, mayúsculas, minúsculas, números y un símbolo."
        );
        return false;
    }

    return true;
}

export default useSignup;
