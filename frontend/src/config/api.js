/**
 * Configuración de URL de API
 * 
 * En desarrollo: usa proxy de Vite (http://localhost:5000/api)
 * En producción: usa variable de entorno VITE_API_URL
 */

export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Construir URL completa para las peticiones a la API
 * 
 * Ejemplos:
 * - getApiUrl('/auth/login') 
 *   → /api/auth/login (desarrollo con proxy)
 *   → https://backend.onrender.com/api/auth/login (producción)
 */
export const getApiUrl = (endpoint) => {
    // Si ya es una URL completa, devolverla como está
    if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
        return endpoint;
    }
    
    // Si la URL base termina con /api y el endpoint comienza con /, usar como está
    if (API_BASE_URL.endsWith('/api') && endpoint.startsWith('/')) {
        return `${API_BASE_URL}${endpoint}`;
    }
    
    // Si el endpoint no comienza con /, añadir /
    if (!endpoint.startsWith('/')) {
        endpoint = `/${endpoint}`;
    }
    
    return `${API_BASE_URL}${endpoint}`;
};

export default API_BASE_URL;
