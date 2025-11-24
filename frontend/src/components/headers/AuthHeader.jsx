import React from "react";
import Logo from "./Logo";

const AuthHeader = () => {
    return (
        <header className="bg-amarillomeli py-3 w-full">
            <div className="max-w-7xl mx-auto px-6 flex items-center">
                <Logo />
            </div>
        </header>
    );
};

export default AuthHeader;
