import React from "react";

const UserSection = () => {
    return (
        <div className="flex items-center gap-4 justify-end flex-shrink-0">
            <button className="text-gray-900 text-sm">Ingresa</button>
            <div className="avatar">
                <div className="sm:w-12 w-11 rounded-full border border-white/50">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
        </div>
    );
};

export default UserSection;
