import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

interface ProfileDropdownProps {
  isAuthenticated: boolean;
  role: string;
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  handleOpenProfileModal: () => void;
  handleOpenPreferences: () => void;
  handleLogout: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  isAuthenticated,
  role,
  isDropdownOpen,
  toggleDropdown,
  handleOpenProfileModal,
  handleOpenPreferences,
  handleLogout
}) => {
  return (
    <div className="hidden mdx:flex items-center space-x-4 relative">
      {isAuthenticated && role === 'user' ? (
        <div className="relative">
          <button
            className="profile-button border border-orange-700 text-orange-100 hover:bg-orange-700 px-4 py-2 rounded-md flex items-center space-x-2"
            onClick={toggleDropdown}
          >
            <FaUser />
            <span>Profile</span>
          </button>

          {isDropdownOpen && (
            <div className="profile-dropdown-desktop absolute top-[50px] right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-10 border border-gray-700">
              <button
                className="px-4 py-2 text-sm text-white hover:bg-orange-600 hover:rounded-tl-md hover:rounded-tr-md flex items-center justify-end space-x-2 w-full border-b border-gray-700"
                onClick={handleOpenProfileModal}
              >
                <span>My Profile</span>
                <FaUser className="text-sm" />
              </button>

              <button
                className="px-4 py-2 w-full text-sm text-white hover:bg-orange-600 flex items-center space-x-2 justify-end"
                onClick={handleOpenPreferences}
              >
                <span>Preferences</span>
                <FaCog className="text-sm" />
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-orange-600 hover:rounded-bl-md hover:rounded-br-md flex items-center space-x-2 justify-end border-t border-gray-700"
              >
                <span>Sign Out</span>
                <FaSignOutAlt className="text-sm" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link 
          to="/sign-in" 
          className="signin-navbar-btn border border-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default ProfileDropdown;