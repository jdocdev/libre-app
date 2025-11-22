import { defaultCurrency, configCurrency } from "./currencys";

export const formatCurrency = (price, currencyId = defaultCurrency) => {
    if (price === null || price === undefined) return null;

    const config =
        configCurrency[currencyId] || configCurrency[defaultCurrency];

    return new Intl.NumberFormat(config.locale, {
        style: "currency",
        currency: config.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
};
