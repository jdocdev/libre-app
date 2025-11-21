import React from "react";
import SearchBar from "./SearchBar.jsx";
import UserSection from "./UserSection.jsx";
import Logo from "./Logo.jsx";

const SearchHeader = () => {
    return (
        <header className="bg-amarillomeli py-3 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-4 justify-between">
                <Logo />
                <SearchBar />
                <UserSection />
            </div>
        </header>
    );
};

export default SearchHeader;
