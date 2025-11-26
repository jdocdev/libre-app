import React from "react";

const ProfileHeader = ({ nombre, apellido, usuario, imagenUsuario }) => (
    <div className="flex items-center gap-6 mb-6">
        <img
            src={imagenUsuario}
            alt={nombre + " " + apellido}
            className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
            <div className="text-2xl font-bold text-gray-800">
                {nombre} {apellido}
            </div>
            <div className="text-gray-600 text-lg">@{usuario}</div>
        </div>
    </div>
);

export default ProfileHeader;
