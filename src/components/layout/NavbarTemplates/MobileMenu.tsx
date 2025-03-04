import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

interface MobileMenuProps {
  isAuthenticated: boolean;
  handleMenuItemClick: () => void;
  handleOpenProfileModal: () => void;
  handleOpenPreferences: () => void;
  handleLogout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isAuthenticated,
  handleMenuItemClick,
  handleOpenProfileModal,
  handleOpenPreferences,
  handleLogout
}) => {
  return (
    <div className="absolute top-[59px] text-sm w-[99%] right-0 mx-1 bg-black rounded-md flex flex-col items-end py-4 space-y-4 md:hidden border border-gray-700">
      <div className='flex justify-around w-full'>
        <Link to="/" className="text-white hover:text-orange-600" onClick={handleMenuItemClick}>Home</Link>
        <Link to="/comingsoon" className="text-white hover:text-orange-600" onClick={handleMenuItemClick}>Coming Soon</Link>
        <Link to="/genre" className="text-white hover:text-orange-600" onClick={handleMenuItemClick}>Genre</Link>
        <Link to="/my-list" className="text-white hover:text-orange-600" onClick={handleMenuItemClick}>Bookmarks</Link>
      </div>
      <div className='h-[1px] w-full bg-gray-700'></div>
      <div className="relative text-sm w-full flex justify-end">
        {isAuthenticated ? (
          <>
            <button
              className="px-4 flex py-2 text-sm text-white hover:bg-orange-600 w-full rounded-md justify-center"
              onClick={handleOpenProfileModal}
            >
              <FaUser className="mt-[2px] mr-2" />
              <span>My Profile</span>
            </button>

            <button
              className="flex px-4 py-2 text-white hover:bg-orange-600 w-full rounded-md justify-center"
              onClick={handleOpenPreferences}
            >
              <FaCog className="mt-1 mr-2" />
              <span>Preferences</span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-white flex hover:bg-orange-600 rounded-md justify-center"
            >
              <FaSignOutAlt className="mt-1 mr-2" />
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              to="/sign-in"
              className="px-4 py-2 flex text-white hover:bg-orange-600 rounded-md"
              onClick={handleMenuItemClick}
            >
              <FaSignOutAlt className="mt-1 mr-2" />
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;