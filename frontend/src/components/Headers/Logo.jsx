import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={"/"}>
            <div className="flex items-center gap-3">
                <img
                    src="/Logo.png"
                    alt="Logo Libre App"
                    className="h-10 sm:h-12"
                />
                <span className="hidden sm:inline-block text-2xl font-bold text-azulmeli-darker">
                    Libre App
                </span>
            </div>
        </Link>
    );
};

export default Logo;
