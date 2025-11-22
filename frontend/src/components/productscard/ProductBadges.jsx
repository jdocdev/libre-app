const ProductBadges = ({ badges }) => {
    // Solo muestra el componente si badges.official_store es true
    if (!badges?.official_store) return null;

    return (
        <span className="badge bg-black text-white text-xs font-semibold px-3 py-1 rounded w-fit">
            APPLE TIENDA OFICIAL
        </span>
    );
};

export default ProductBadges;