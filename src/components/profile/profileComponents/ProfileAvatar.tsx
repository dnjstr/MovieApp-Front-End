import React from "react";
import Avatar from "../../../assets/Avatar";

interface ProfileAvatarProps {
    name: string;
    imageUrl?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ name, imageUrl }) => (
    <div className="flex justify-center mb-6">
        <Avatar name={name} imageUrl={imageUrl} size="lg" />
    </div>
);

export default ProfileAvatar;
