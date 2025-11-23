import ProductsCard from "../productscard/ProductsCard";
import NoResults from "./NoResults";
import ServerError from "./ServerError";

const ProductsList = ({ products, loading, error }) => {
    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center bg-gray-200 py-16">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (error) {
        return <ServerError />;
    }

    if (!products || products.length === 0) {
        return (
            <div className="flex-1 flex justify-center bg-gray-200 py-8">
                <div className="max-w-7xl w-full justify-center px-4 sm:px-6 flex flex-col">
                    <NoResults />
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex justify-center bg-gray-200 py-8">
            <div className="max-w-7xl w-full px-4 sm:px-6 flex flex-col gap-[1px]">
                {products.map((product, i) => (
                    <ProductsCard key={i} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
