import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaBars, FaTimes, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/');
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 fixed w-full bg-black bg-opacity-75 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/Logo.png" alt="MovieHaven Logo" className="h-8 cursor-pointer" />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 text-white gap-3 text-sm">
        <Link to="/" className="flex items-center space-x-2 hover:text-orange-600">
          <FaHome size={20} />
          <span className="hidden md:inline">Home</span>
        </Link>
        <Link to="/popular" className="hover:text-orange-600 ease-in-out duration-300">
          New & Popular
        </Link>
        <Link to="/genre" className="hover:text-orange-600 ease-in-out duration-300">
          Genre
        </Link>
        <Link to="/my-list" className="hover:text-orange-600 ease-in-out duration-300">
          My List
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-container hidden mdx:flex items-center bg-gray-950 bg-opacity-70 px-3 py-2 rounded-md w-64 md:w-1/5 lg:w-1/4 xl:w-1/3">
        <FaSearch className="text-white search-icon" />
        <input
          type="text"
          placeholder="Search for Movies or TV shows"
          className="header-search-bar bg-transparent border-none text-white px-3 outline-none w-full hover:input-hover"
        />
      </div>

      {/* Profile Dropdown (Authenticated Users) */}
      <div className="hidden md:flex items-center space-x-4 relative">
        {isAuthenticated ? (
          <div className="relative">
            <button
              className="bg-orange-600 text-white px-4 py-2 rounded-md flex items-center space-x-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Toggle profile dropdown"
            >
              <FaUser />
              <span>Profile</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1">
                <Link
                  to="/ProfilePage"
                  className="px-4 py-2 text-sm text-white hover:bg-orange-600 flex items-center space-x-2"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <FaUser className="text-sm" />
                  <span>My Profile</span>
                </Link>

                <Link
                  to="/settings"
                  className="px-4 py-2 text-sm text-white hover:bg-orange-600 flex items-center space-x-2"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <FaCog className="text-sm" />
                  <span>Settings</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-white hover:bg-red-600 flex items-center space-x-2"
                >
                  <FaSignOutAlt className="text-sm" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="relative">
            <button
              className="bg-orange-600 text-white px-4 py-2 rounded-md"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Toggle sign-in dropdown"
            >
              <FaUser />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1">
                <Link
                  to="/sign-in"
                  className="block px-4 py-2 text-sm text-white hover:bg-orange-600"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="block px-4 py-2 text-sm text-white hover:bg-orange-600"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white"
        aria-label="Toggle mobile menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-black rounded-md bg-opacity-100 flex flex-col items-center p-4 space-y-4 md:hidden">
          <Link to="/" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/popular" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
            New & Popular
          </Link>
          <Link to="/genre" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
            Genre
          </Link>
          <Link to="/my-list" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
            My List
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                to="/ProfilePage"
                className="block px-4 py-2 text-white hover:bg-orange-600 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-white hover:bg-orange-600 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-white hover:bg-red-600 rounded-md"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/sign-in"
                className="block px-4 py-2 text-white hover:bg-orange-600 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="block px-4 py-2 text-white hover:bg-orange-600 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;