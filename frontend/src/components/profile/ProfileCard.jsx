import React from "react";

const ProfileCard = ({ icon, title, description, checked }) => (
    <div className="bg-white rounded-lg shadow p-5 flex flex-col gap-2 min-w-[220px] min-h-[110px] relative">
        <div className="flex items-center justify-between">
            <span className="text-gray-700">{icon}</span>
            {checked && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                </svg>
            )}
        </div>
        <div className="font-semibold text-gray-800">{title}</div>
        <div className="text-gray-500 text-sm">{description}</div>
    </div>
);

export default ProfileCard;
