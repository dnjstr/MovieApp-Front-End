import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 fixed w-full bg-black bg-opacity-75 z-50">
      
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/Logo.png" alt="MovieHaven Logo" className="h-8 cursor-pointer" />
        </Link>
      </div>

      <div className="hidden md:flex space-x-6 text-white gap-3 text-sm">
        <Link to="/" className="flex items-center space-x-2 hover:text-orange-600">
          <FaHome size={20} />
          <span className="hidden md:inline">Home</span>
        </Link>
        <Link to="/popular" className="hover:text-orange-600 ease-in-out duration-300">New & Popular</Link>
        <Link to="/genre" className="hover:text-orange-600 ease-in-out duration-300">Genre</Link>
        <Link to="/my-list" className="hover:text-orange-600 ease-in-out duration-300">My List</Link>
      </div>

      <div className="search-container hidden mdx:flex items-center bg-gray-800 px-3 py-2 rounded-md w-64 md:w-1/5 lg:w-1/4 xl:w-1/3">
        <FaSearch className="text-white search-icon" />
        <input
          type="text"
          placeholder="Search for Movies or TV shows"
          className="header-search-bar bg-transparent border-none text-white px-3 outline-none w-full hover:input-hover"
        />
      </div>

      <div className="hidden md:flex items-center space-x-4 relative">
        <button
          className="bg-orange-600 text-white px-4 py-2 rounded-md"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-5 fill-current text-gray-800">
          <path d="M12 1.2A4.8 4.8 0 1 0 16.8 6 4.805 4.805 0 0 0 12 1.2zm0 8.6A3.8 3.8 0 1 1 15.8 6 3.804 3.804 0 0 1 12 9.8zM9 22H4l.01-4.5A5.498 5.498 0 0 1 9.5 12h4.312a5.968 5.968 0 0 0-.462 1H9.5A4.505 4.505 0 0 0 5 17.5V21h4zm10-10.9a3.9 3.9 0 0 0-3.9 3.9 3.86 3.86 0 0 0 .225 1.255L11 20.727V23h2.993l.023-.01L15 22v-1h1.005L17 20v-1h1.004l.186-.187A3.9 3.9 0 1 0 19 11.1zm0 6.9a2.973 2.973 0 0 1-1.223-.267l-.272.267H16v2h-2v1.674l-.408.326H12v-.906l4.419-4.591A2.965 2.965 0 0 1 16 15a3 3 0 1 1 3 3zm.5-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5zm0 2a.5.5 0 1 1 .5-.5.501.501 0 0 1-.5.5z"/>
          <path fill="none" d="M0 0h24v24H0z"/>
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            className="absolute  right-0 mt-10 bg-gray-800 bg-opacity-100 rounded-md shadow-lg py-2 w-36"
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
        <div className="absolute top-16 right-0 w-48 bg-gray-800 rounded-md bg-opacity-100 flex flex-col items-center p-4 space-y-4 md:hidden">
          <Link to="/" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/popular" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>New & Popular</Link>
          <Link to="/genre" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Genre</Link>
          <Link to="/my-list" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>My List</Link>

          <div className="relative w-full">
            
            <button
              className="bg-orange-600 text-white px-4 py-2 rounded-md w-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              SignIn / Signup
            </button>

            {isDropdownOpen && (
              <div className="mt-2  border-gray-400 bg-opacity-90 rounded-md py-1 w-full text-center">
                <Link to="/sign-in" className="block px-4 py-2 text-white hover:bg-orange-600 rounded-md">Sign In</Link>
                <Link to="/sign-up" className="block px-4 py-2 text-white hover:bg-orange-600 rounded-md">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
