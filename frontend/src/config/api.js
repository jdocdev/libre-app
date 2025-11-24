// Definir la URL base de la API según la variable de entorno o usar el valor por defecto
export const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";


// Construir URL completa para las peticiones a la API
export const getApiUrl = (endpoint) => {
    // Si ya es una URL completa, devolverla como está
    if (endpoint.startsWith("http://") || endpoint.startsWith("https://")) {
        return endpoint;
    }

    // Si la URL base termina con /api y el endpoint comienza con /, usar como está
    if (API_BASE_URL.endsWith("/api") && endpoint.startsWith("/")) {
        return `${API_BASE_URL}${endpoint}`;
    }

    // Si el endpoint no comienza con /, añadir /
    if (!endpoint.startsWith("/")) {
        endpoint = `/${endpoint}`;
    }

    return `${API_BASE_URL}${endpoint}`;
};

export default API_BASE_URL;
