import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaBars, FaTimes, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import SearchResults from '../search/SearchResults';
import { debounce } from 'lodash';
import { useClickOutside } from '../../hooks/useClickOutside';
import PreferencesModal from '../pages/PreferencesModal';
import ProfileModal from '../pages/ProfilePageModal';
import axiosInstance from "../../api/axiosInstance";

interface Movie {
    id: number;
    title: string;
    poster_image: string;
    release_date: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, logout, role } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    const checkAdminState = () => {
      const savedRole = localStorage.getItem('userRole');
      if (savedRole === 'admin') {
        window.location.reload();
      }
    };

    window.addEventListener('popstate', checkAdminState);
    
    return () => {
      window.removeEventListener('popstate', checkAdminState);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/');
  };

  const searchMovies = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
  
    try {
      const response = await axiosInstance.get(`/movie/search/`, {
        params: { q: query }, 
      });
  
      setSearchResults(response.data);
      setShowResults(true);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const debouncedSearch = debounce(searchMovies, 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleCloseSearch = () => {
    setShowResults(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  useClickOutside(searchContainerRef, () => {
    setShowResults(false);
  });

  return (
    <nav className="nav-bar-container flex items-center justify-between px-8 py-3 fixed w-full bg-black bg-opacity-75 z-50 border-b border-gray-700">
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
        <Link to="/comingsoon" className="hover:text-orange-600 ease-in-out duration-300">Coming Soon</Link>
        <Link to="/genre" className="hover:text-orange-600 ease-in-out duration-300">Genre</Link>
        <Link to="/my-list" className="hover:text-orange-600 ease-in-out duration-300">Bookmarks</Link>
      </div>

      <div 
        ref={searchContainerRef}
        className="search-container hidden mdx:flex items-center bg-gray-950 bg-opacity-70 
        px-3 py-2 rounded-md w-64 md:w-1/5 lg:w-1/4 xl:w-1/3 relative"
      >
        <FaSearch className="text-white search-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setShowResults(true)}
          placeholder="Search for Movies or TV shows"
          className="header-search-bar bg-transparent border-none text-white px-3 outline-none w-full hover:input-hover"
        />
        {showResults && searchResults.length > 0 && (
          <SearchResults 
            results={searchResults} 
            onClose={handleCloseSearch}
          />
        )}
      </div>

      {/* Desktop Profile/Auth Dropdown */}
      <div className="hidden md:flex items-center space-x-4 relative">
        {isAuthenticated && role === 'user' ? (
          <div className="relative">
            <button
              className="profile-button border border-orange-700 text-orange-100 hover:bg-orange-700 px-4 py-2 rounded-md flex items-center space-x-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FaUser />
              <span>Profile</span>
            </button>

            {isDropdownOpen && (
              <div className="profile-dropdown-desktop absolute top-12 right-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-10">
                <button
                  className="px-4 py-2 text-sm text-white hover:bg-orange-600 flex items-center space-x-2 w-full text-left"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsProfileModalOpen(true);
                  }}
                >
                  <FaUser className="text-sm" />
                  <span>My Profile</span>
                </button>

                <button
                  className=" px-4 py-2 w-full text-sm text-white hover:bg-orange-600 flex items-center space-x-2"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsPreferencesOpen(true);
                  }}
                >
                  <FaCog className="text-sm" />
                  <span>Preferences</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-white hover:bg-orange-600 flex items-center space-x-2"
                >
                  <FaSignOutAlt className="text-sm" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link 
            to="/sign-in" 
            className="signin-navbar-btn border border-orange-700 text-white px-4 py-2 rounded-md  hover:bg-orange-700 transition duration-300"
          >
            Sign In
          </Link>
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
        <div className="absolute top-16 text-sm right-0 w-48 bg-black rounded-md bg-opacity-70 flex flex-col items-center p-4 space-y-4 md:hidden">
          <Link to="/" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/comingsoon" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Coming Soon</Link>
          <Link to="/genre" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Genre</Link>
          <Link to="/my-list" className="text-white hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>Bookmarks</Link>

          <div className="relative text-sm pt-3 w-full">
            {isAuthenticated ? (
              <>

                <button
                  className="px-4 flex py-2 text-sm text-white hover:bg-orange-600 w-full rounded-md"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsProfileModalOpen(true);
                  }}
                >
                  <FaUser className="mt-1 mr-1" />
                  <span>My Profile</span>
                </button>

                <button
                  className="flex px-4 py-2 text-white hover:bg-orange-600 w-full rounded-md"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsPreferencesOpen(true);
                  }}
                >
                  <FaCog className="mt-1 mr-2" />
                  <span>Preferences</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-white flex hover:bg-orange-600 rounded-md"
                >
                  <FaSignOutAlt className="mt-1 mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className=" px-4 py-2 flex text-white hover:bg-orange-600 rounded-md"
                  onClick={() => { setIsMenuOpen(false); }}
                >
                  <FaSignOutAlt className="mt-1 mr-2" />
                  Sign In
                </Link>
                {/* <Link
                  to="/sign-up"
                  className="block px-4 py-2 text-white hover:bg-orange-600 rounded-md"
                  onClick={() => { setIsMenuOpen(false); }}
                >
                  Sign Up
                </Link> */}
              </>
            )}
          </div>
        </div>
      )}
      <PreferencesModal
        isOpen={isPreferencesOpen}
        onRequestClose={() => setIsPreferencesOpen(false)}
      />

      <ProfileModal 
        isOpen={isProfileModalOpen}
        onRequestClose={() => setIsProfileModalOpen(false)}
      />

    </nav>
  );
};

export default Navbar;



// ang mag erase sa mga comments kay ang mga comments