import { formatCurrency } from "./formatCurrency";
import { defaultCurrency } from "./currencys";

export function normalizeProduct(item) {
    const currency = item.currency_id || defaultCurrency;
    const dummyImage =
        "https://http2.mlstatic.com/frontend-assets/bf-purchases-frontend-web/fallback-image.svg";

    return {
        // Identificación
        id: item.id,
        title: item.title || "Sin título",
        brand: item.brand || "Apple",
        condition: item.condition || "new",

        // Imágenes
        thumbnail: item.thumbnail || dummyImage,

        // Badges
        badges: {
            official_store: item.title?.includes("Apple iPhone"),
            refurbished:
                item.condition === "refurbished" ||
                item.title?.toLowerCase().includes("reacondicionado"),
        },

        // Precios
        currency_id: currency,
        price: item.price || 0,
        price_formatted: formatCurrency(item.price, currency),
        discount: item.discount ?? null,
        price_with_discount: item.discount
            ? Math.round(item.price * (1 - item.discount / 100))
            : item.price,
        price_with_discount_formatted: item.discount
            ? formatCurrency(
                  Math.round(item.price * (1 - item.discount / 100)),
                  currency
              )
            : formatCurrency(item.price, currency),

        // Cuotas
        installments: item.installments
            ? {
                  quantity: item.installments.quantity,
                  amount: item.installments.amount,
                  amount_formatted: formatCurrency(
                      item.installments.amount,
                      currency
                  ),
              }
            : {
                  quantity: 12,
                  amount: Math.round(item.price / 12),
                  amount_formatted: formatCurrency(
                      Math.round(item.price / 12),
                      currency
                  ),
              },

        // Envío
        shipping: {
            free_shipping: item.shipping?.free_shipping ?? false,
        },

        // Reviews
        reviews: {
            rating_average: item.reviews?.rating_average ?? 0,
            total: item.reviews?.total ?? 0,
            colors: item.reviews?.colors ?? 1,
        },
    };
}
