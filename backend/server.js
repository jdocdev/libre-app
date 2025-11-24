import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Configurar CORS para desarrollo y producción
const allowedOrigins = [
    "http://localhost:3000", // Desarrollo local
    "http://localhost:5000", // Backend local
    "https://jdocdev-libre-app.netlify.app", // Netlify producción
    process.env.FRONTEND_URL || "",
];

app.use(
    cors({
        origin: (origin, callback) => {
            // Permitir peticiones sin origin (Postman, apps móviles, etc.) o de orígenes permitidos
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

// obtener datos en formato JSON desde el body de las solicitudes HTTP
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
    res.send("Servidor en ejecución");
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Servidor en ejecución por el puerto ${PORT}`);
});
