import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    const isSecure = process.env.NODE_ENV !== "development";

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 días
        httpOnly: true, // previene el acceso al token desde JavaScript del lado del cliente
        sameSite: "Strict", // protege contra ataques CSRF falsificación de solicitud entre sitios
        secure: isSecure, // asegura que la cookie solo se envíe a través de HTTPS en producción
    });
};

export default generateTokenAndSetCookie;
