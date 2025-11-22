import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

import { passwordRegex } from "../utils/validators.js";

export const signup = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            usuario,
            contrasena,
            confirmacionContrasena,
        } = req.body;

        // console.log("info registro", req.body);

        if (contrasena !== confirmacionContrasena) {
            return res
                .status(400)
                .json({ error: "Las contraseñas no coinciden" });
        }

        if (!passwordRegex.test(contrasena)) {
            return res.status(400).json({
                error: "La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y un símbolo.",
            });
        }

        const user = await User.findOne({ usuario });

        if (user) {
            return res
                .status(400)
                .json({ error: "El nombre de usuario ya está en uso" });
        }

        const salt = await bcrypt.genSalt(10);
        const asegurarContrasena = await bcrypt.hash(contrasena, salt);

        const imagenUsuario = `https://avatar.iran.liara.run/username?username=${nombre}+${apellido}`;

        const newUser = new User({
            nombre: nombre,
            apellido: apellido,
            usuario: usuario,
            contrasena: asegurarContrasena,
            imagenUsuario: imagenUsuario,
        });

        if (newUser) {
            // generar JWT
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                nombre: newUser.nombre,
                apellido: newUser.apellido,
                usuario: newUser.usuario,
                imagenUsuario: newUser.imagenUsuario,
            });
        } else {
            res.status(400).json({ error: "Datos de usuario inválidos" });
        }
    } catch (error) {
        console.error("Error en el controlador de registro:", error.message);
        res.status(500).json({ error: "Error en el servidor" });
    }
};

export const login = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;

        const usuarioEncontrado = await User.findOne({ usuario });

        const contrasenaCorrecta = await bcrypt.compare(
            contrasena,
            usuarioEncontrado?.contrasena || ""
        );

        if (!usuarioEncontrado || !contrasenaCorrecta) {
            return res
                .status(401)
                .json({ error: "Nombre de usuario o contraseña incorrectos" });
        }

        generateTokenAndSetCookie(usuarioEncontrado._id, res);

        res.status(200).json({
            _id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido,
            usuario: usuarioEncontrado.usuario,
            imagenUsuario: usuarioEncontrado.imagenUsuario,
        });
    } catch (error) {
        console.error("Error en el controlador de login:", error.message);
        res.status(500).json({ error: "Error en el servidor" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Cierre de sesión exitoso" });
    } catch (error) {
        console.error("Error en el controlador de logout:", error.message);
        res.status(500).json({ error: "Error en el servidor" });
    }
};
