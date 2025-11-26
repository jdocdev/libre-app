import React from "react";
import SearchHeader from "../../components/headers/SearchHeader";
import ProfileCard from "../../components/profile/ProfileCard";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileCancelAccount from "../../components/profile/ProfileCancelAccount";
import { profileCards } from "../../utils/profileData.jsx";

const Profile = ({ authUser, setAuthUser }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <SearchHeader authUser={authUser} setAuthUser={setAuthUser} />
            <div className="flex-1 flex justify-center bg-gray-200 py-8">
                <div className="max-w-6xl w-full px-4 sm:px-6 flex flex-col gap-8">
                    <ProfileHeader
                        nombre={authUser?.nombre}
                        apellido={authUser?.apellido}
                        usuario={authUser?.usuario}
                        imagenUsuario={authUser?.imagenUsuario}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {profileCards.map((card, idx) => (
                            <ProfileCard key={idx} {...card} />
                        ))}
                    </div>

                    <ProfileCancelAccount />
                </div>
            </div>
        </div>
    );
};

export default Profile;
