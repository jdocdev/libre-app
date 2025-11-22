import ProductsCard from "../productscard/ProductsCard";

const ProductsList = () => {
    const dummyData = [1, 2, 3];

    return (
        <div className="flex-1 flex justify-center bg-gray-200 py-8">
            <div className="max-w-7xl w-full px-4 sm:px-6 flex flex-col gap-[1px]">
                {dummyData.map((item, i) => (
                    <ProductsCard key={i} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
