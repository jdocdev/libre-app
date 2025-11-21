import React from "react";
import SearchHeader from "../../components/SearchHeader";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <SearchHeader />
            <div className="flex-1 flex items-center justify-center bg-gray-200">
                PRODUCTOS
            </div>
        </div>
    );
};

export default Home;
