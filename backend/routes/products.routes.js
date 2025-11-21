import express from "express";
import {
    buscarProductos,
    obtenerDetalleProducto,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/search", buscarProductos);

router.get("/items/:id", obtenerDetalleProducto);

export default router;
