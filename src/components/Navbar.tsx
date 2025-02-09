import React from 'react';
import { FaHome, FaSearch, FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 fixed w-full bg-black bg-opacity-75 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/2972234.png" alt="JustWatch Logo" className="h-8" />
      </div>

      {/* Navigation Icons */}
      <div className="flex space-x-6 text-white">
        <button className="flex items-center space-x-2 hover:text-yellow-400">
          <FaHome size={20} />
          <span className="hidden md:inline">Home</span>
        </button>
        <button className="hover:text-yellow-400">New & Popular</button>
        <button className="hover:text-yellow-400">Genre</button>
        <button className="hover:text-yellow-400">My List</button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md w-64">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for Movies or TV shows"
          className="bg-transparent border-none text-white px-2 outline-none w-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 px-4 py-2 rounded-md">Sign In</button>
        <FaBars size={24} className="text-white cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
