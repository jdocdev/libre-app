import { searchResults, productDetail } from "../mocks/products.mock.js";

export const buscarProductos = async (req, res) => {
    try {
        const { q } = req.query;

        if (!q) {
            return res
                .status(400)
                .json({ error: "El parámetro de búsqueda es requerido" });
        }

        // Filtrar resultados que coincidan con la búsqueda
        const terminoBusqueda = q.toLowerCase();
        const resultadosFiltrados = searchResults.results.filter((producto) =>
            producto.title.toLowerCase().includes(terminoBusqueda)
        );

        if (resultadosFiltrados.length === 0) {
            return res.status(404).json({
                query: q,
                paging: {
                    total: 0,
                    offset: 0,
                    limit: 0,
                },
                results: [],
                message: "No se encontraron resultados para tu búsqueda",
            });
        }

        const resultados = {
            query: q,
            paging: {
                ...searchResults.paging,
                total: resultadosFiltrados.length,
                limit: resultadosFiltrados.length,
            },
            results: resultadosFiltrados,
        };

        res.status(200).json(resultados);
    } catch (error) {
        console.error("Error en el controlador de búsqueda:", error.message);
        res.status(500).json({ error: "Error en el servidor" });
    }
};

export const obtenerDetalleProducto = async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar el producto por ID en los resultados del mock
        const productoEncontrado = searchResults.results.find(
            (producto) => producto.id === id
        );

        if (!productoEncontrado) {
            return res.status(404).json({
                error: "Producto no encontrado",
                message: `No se encontró un producto con el ID: ${id}`,
            });
        }

        // Si se encuentra, devolver el detalle completo
        const detalle = {
            ...productDetail,
            id: productoEncontrado.id,
            title: productoEncontrado.title,
            price: productoEncontrado.price,
            condition: productoEncontrado.condition,
        };

        res.status(200).json(detalle);
    } catch (error) {
        console.error(
            "Error en el controlador de detalle de producto:",
            error.message
        );
        res.status(500).json({ error: "Error en el servidor" });
    }
};
