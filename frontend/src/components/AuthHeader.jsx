import React from "react";

const AuthHeader = () => {
    return (
        <header className="bg-amarillomeli py-2 w-full">
            <div className="max-w-7xl mx-auto px-6 flex items-center">
                <img
                    src="/Logo.png"
                    alt="Logo Libre App"
                    className="h-10 mr-3"
                />
                <span className="text-2xl font-bold text-azulmeli-darker">
                    Libre App
                </span>
            </div>
        </header>
    );
};

export default AuthHeader;
