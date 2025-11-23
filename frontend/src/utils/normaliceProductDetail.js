import { formatCurrency } from "./formatCurrency";
import { defaultCurrency } from "./currencys";

export function normalizeProductDetail(data) {
    const currency = data.currency_id || defaultCurrency;
    const dummyImage =
        "https://http2.mlstatic.com/frontend-assets/bf-purchases-frontend-web/fallback-image.svg";

    // Calcular descuento si hay precio original
    const discount = data.original_price
        ? Math.round(
              ((data.original_price - data.price) / data.original_price) * 100
          )
        : null;

    return {
        // Identificación
        id: data.id,
        title: data.title || "Sin título",
        condition: data.condition || "new",
        permalink: data.permalink,

        // Stock y ventas
        available_quantity: data.available_quantity || 0,
        sold_quantity: data.sold_quantity || 0,

        // Imágenes
        thumbnail: data.pictures?.[0]?.url || data.thumbnail || dummyImage,
        pictures: data.pictures || [],

        // Badges
        badges: {
            official_store: data.title?.includes("Apple iPhone"),
        },

        // Precios
        currency_id: currency,
        price: data.price || 0,
        price_formatted: formatCurrency(data.price, currency),
        original_price: data.original_price,
        original_price_formatted: data.original_price
            ? formatCurrency(data.original_price, currency)
            : null,
        discount: discount,

        // Cuotas
        installments: data.installments
            ? {
                  quantity: data.installments.quantity,
                  amount: data.installments.amount,
                  amount_formatted: formatCurrency(
                      data.installments.amount,
                      currency
                  ),
                  rate: data.installments.rate,
                  currency_id: data.installments.currency_id,
              }
            : null,

        // Envío
        shipping: {
            free_shipping: data.shipping?.free_shipping ?? false,
            mode: data.shipping?.mode,
            logistic_type: data.shipping?.logistic_type,
            store_pick_up: data.shipping?.store_pick_up ?? false,
        },

        // Dirección del vendedor
        seller_address: {
            city: data.seller_address?.city?.name || null,
            state: data.seller_address?.state?.name || null,
        },

        // Atributos
        attributes: data.attributes || [],

        // Garantía
        warranty: data.warranty || null,

        // Descripción
        description: data.description?.plain_text || "",

        // Reviews
        reviews: {
            rating_average: data.reviews?.rating_average || 0,
            total: data.reviews?.total || 0,
        },
    };
}
