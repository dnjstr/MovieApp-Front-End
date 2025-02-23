import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../../assets/Avatar";

interface User {
    name?: string;
    email?: string;
    user?: {
        fullName?: string;
    };
    profileImage?: string;
}

const ProfileModal: React.FC<{ isOpen: boolean; onRequestClose: () => void }> = ({ 
    isOpen, 
    onRequestClose 
}) => {
    const { user, logout } = useAuth();
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());

    useEffect(() => {
        if (user) {
            setCurrentUser(user as User);
        }
    }, [user]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getDisplayName = () => {
        if (currentUser?.user?.fullName) return currentUser.user.fullName;
        if (currentUser?.name) return currentUser.name;
        return 'User';
    };

    const handleLogout = () => {
        logout();
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            className="modal-content bg-black rounded-lg outline-none border border-gray-700"
            overlayClassName="z-20 modal-overlay fixed inset-0 bg-black backdrop-blur-sm bg-opacity-40 flex justify-center items-center"
        >
            <div className="w-full max-w-md px-8 py-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-xl font-bold text-orange-600">Profile</h1>
                    <span className="text-sm text-gray-400">{currentTime}</span>
                </div>

                {currentUser ? (
                    <div className="space-y-6">
                        <div className="flex justify-center mb-6">
                            <Avatar 
                                name={getDisplayName()}
                                imageUrl={currentUser.profileImage}
                                size="lg"
                            />
                        </div>
                        
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-white">
                                {getDisplayName()}
                            </h2>
                            <p className="text-gray-400 mt-2">
                                {currentUser.email || 'No email provided'}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4 mt-8">
                            <button 
                                onClick={onRequestClose}
                                className="flex-1 px-9 py-2 text-sm border border-orange-600/30 text-gray-400 rounded-md hover:bg-orange-600/10 transition-colors"
                            >
                                Close
                            </button>
                            <button 
                                onClick={handleLogout}
                                className="flex-1 px-9 py-2 text-sm bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-400 text-center">No user information available.</p>
                )}
            </div>
        </Modal>
    );
};

export default ProfileModal;