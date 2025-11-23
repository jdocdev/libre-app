import { searchResults, productDetail } from "../mocks/products.mock.js";

export const buscarProductos = async (req, res) => {
    try {
        const { q, offset = 0, limit = 2, sort = 'relevance' } = req.query;

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
                    offset: parseInt(offset),
                    limit: parseInt(limit),
                },
                results: [],
                message: "No se encontraron resultados para tu búsqueda",
            });
        }

        // Aplicar ordenamiento
        let resultadosOrdenados = [...resultadosFiltrados];
        switch (sort) {
            case 'price_asc':
                resultadosOrdenados.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                resultadosOrdenados.sort((a, b) => b.price - a.price);
                break;
            case 'relevance':
            default:
                // Mantener el orden original para relevancia
                break;
        }

        // Aplicar paginación
        const paginatedResults = resultadosOrdenados.slice(
            parseInt(offset),
            parseInt(offset) + parseInt(limit)
        );

        const resultados = {
            query: q,
            paging: {
                total: resultadosOrdenados.length,
                offset: parseInt(offset),
                limit: parseInt(limit),
            },
            results: paginatedResults,
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

        // Solo el producto MLA998877665 tiene detalle completo
        if (id !== "MLA998877665") {
            return res.status(404).json({
                error: "Producto no encontrado",
                message: `No se encontró un producto con el ID: ${id}`,
            });
        }

        // Devolver el detalle completo
        res.status(200).json(productDetail);
    } catch (error) {
        console.error(
            "Error en el controlador de detalle de producto:",
            error.message
        );
        res.status(500).json({ error: "Error en el servidor" });
    }
};
