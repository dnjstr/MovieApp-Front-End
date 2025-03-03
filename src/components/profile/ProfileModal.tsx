import React from "react";
import Modal from "react-modal";
import ProfileAvatar from "./ProfileAvatar";
import ProfileActions from "./ProfileActions";
import useProfileModal from "../../hooks/useProfileModal";

const ProfileModal: React.FC<{ isOpen: boolean; onRequestClose: () => void }> = ({ 
  isOpen, 
  onRequestClose 
}) => {
  const { currentTime, bgColor, textColor, currentUser, getDisplayName, handleLogout } = useProfileModal(onRequestClose);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="modal-content bg-black rounded-lg outline-none border border-gray-700"
      overlayClassName="z-20 modal-overlay fixed inset-0 bg-black backdrop-blur-sm bg-opacity-40 flex justify-center items-center"
    >
      <div className={`w-full max-w-md px-8 py-6 ${bgColor} rounded-lg`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-orange-600">Profile</h1>
          <span className={`text-sm ${textColor}`}>{currentTime}</span>
        </div>

        {/* Profile Content */}
        {currentUser ? (
          <div className="space-y-6">
            <ProfileAvatar name={getDisplayName()} imageUrl={currentUser.profileImage} />
            <div className="text-center">
              <h2 className={`text-2xl font-semibold ${textColor}`}>{getDisplayName()}</h2>
              <p className={`${textColor} mt-2`}>{currentUser.email || 'No email provided'}</p>
            </div>
            <ProfileActions onClose={onRequestClose} onLogout={handleLogout} textColor={textColor} />
          </div>
        ) : (
          <p className="text-gray-400 text-center">No user information available.</p>
        )}
      </div>
    </Modal>
  );
};

export default ProfileModal;
