import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

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
