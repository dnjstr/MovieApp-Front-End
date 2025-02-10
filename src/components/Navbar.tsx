import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 fixed w-full bg-black bg-opacity-75 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/2972234.png" alt="JustWatch Logo" className="h-8 cursor-pointer" />
        </Link>
      </div>

      {/* Navigation Icons (Desktop) */}
      <div className="hidden md:flex space-x-6 text-white">
        <Link to="/" className="flex items-center space-x-2 hover:text-orange-600">
          <FaHome size={20} />
          <span className="hidden md:inline">Home</span>
        </Link>
        <Link to="/popular" className="hover:text-orange-600">New & Popular</Link>
        <Link to="/genre" className="hover:text-orange-600">Genre</Link>
        <Link to="/my-list" className="hover:text-orange-600">My List</Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-gray-800 px-3 py-2 rounded-md w-64">
        <FaSearch className="text-white" />
        <input
          type="text"
          placeholder="Search for Movies or TV shows"
          className="bg-transparent border-none text-white px-2 outline-none w-full"
        />
      </div>

      {/* Right Side (Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/sign-in">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md">Sign In</button>
        </Link>
        <Link to="/sign-up">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md">Sign Up</button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-black bg-opacity-90 flex flex-col items-center p-4 space-y-4 md:hidden">
          <Link to="/" className="hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/popular" className="hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>New & Popular</Link>
          <Link to="/genre" className="hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Genre</Link>
          <Link to="/my-list" className="hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>My List</Link>
          <Link to="/sign-in" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md w-full">Sign In</button>
          </Link>
          <Link to="/sign-up" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md w-full">Sign Up</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
