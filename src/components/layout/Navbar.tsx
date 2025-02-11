import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 fixed w-full bg-black bg-opacity-75 z-50">
      
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/Logo.png" alt="MovieHaven Logo" className="h-8 cursor-pointer" />
        </Link>
      </div>

      <div className="hidden md:flex space-x-6 text-white">
        <Link to="/" className="flex items-center space-x-2 hover:text-orange-600">
          <FaHome size={20} />
          <span className="hidden md:inline">Home</span>
        </Link>
        <Link to="/popular" className="hover:text-orange-600">New & Popular</Link>
        <Link to="/genre" className="hover:text-orange-600">Genre</Link>
        <Link to="/my-list" className="hover:text-orange-600">My List</Link>
      </div>

      <div className="hidden md:flex items-center bg-gray-800 px-3 py-2 rounded-md w-64">
        <FaSearch className="text-white" />
        <input
          type="text"
          placeholder="Search for Movies or TV shows"
          className="bg-transparent border-none text-white px-2 outline-none w-full"
        />
      </div>

      <div className="hidden md:flex items-center space-x-4 relative">
        <button
          className="bg-orange-600 text-white px-4 py-2 rounded-md"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          SignIn / SignUp
        </button>

        {isDropdownOpen && (
          <div
            className="absolute right-0 mt-2 bg-black bg-opacity-90 rounded-md shadow-lg py-2 w-40"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="/sign-in" className="block px-4 py-2 text-white hover:bg-orange-600">Sign In</Link>
            <Link to="/sign-up" className="block px-4 py-2 text-white hover:bg-orange-600">Sign Up</Link>
          </div>
        )}
      </div>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

  
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-black bg-opacity-90 flex flex-col items-center p-4 space-y-4 md:hidden">
          <Link to="/" className="hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/popular" className="hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>New & Popular</Link>
          <Link to="/genre" className="hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Genre</Link>
          <Link to="/my-list" className="hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>My List</Link>

          <div className="relative w-full">
            <button
              className="bg-orange-600 text-white px-4 py-2 rounded-md w-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              SignIn / Signup
            </button>

            {isDropdownOpen && (
              <div className="mt-2 bg-black bg-opacity-90 rounded-md py-2 w-full text-center">
                <Link to="/sign-in" className="block px-4 py-2 text-white hover:bg-orange-600">Sign In</Link>
                <Link to="/sign-up" className="block px-4 py-2 text-white hover:bg-orange-600">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
