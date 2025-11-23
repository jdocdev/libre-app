import React from "react";
import SearchBar from "./SearchBar.jsx";
import UserSection from "./UserSection.jsx";
import Logo from "./Logo.jsx";

const SearchHeader = ({ authUser, setAuthUser, onSearch }) => {
    return (
        <header className="bg-amarillomeli py-3 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-4 justify-between">
                <Logo />
                <SearchBar onSearch={onSearch} />
                <UserSection authUser={authUser} setAuthUser={setAuthUser} />
            </div>
        </header>
    );
};

export default SearchHeader;
