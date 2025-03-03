import React from "react";

interface ProfileActionsProps {
    onClose: () => void;
    onLogout: () => void;
    textColor: string;
}

const ProfileActions: React.FC<ProfileActionsProps> = ({ onClose, onLogout, textColor }) => (
    <div className="flex space-x-4 mt-8 pt-5 w-[250px]">
        <button 
            onClick={onClose}
            className={`flex-1 px-2 w-[64px] py-2 text-sm border border-orange-600/30 ${textColor} rounded-md hover:bg-orange-600/10 transition-colors`}
        >
            Close
        </button>
        <button 
            onClick={onLogout}
            className="flex-1 px-2 w-[64px] py-2 text-sm bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
        >
            Sign Out
        </button>
    </div>
);

export default ProfileActions;
