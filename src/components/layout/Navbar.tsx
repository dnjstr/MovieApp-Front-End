import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import PreferencesModal from '../preference/PreferencesModal';
import ProfileModal from '../profile/ProfileModal';
import { useSearch } from '../../hooks/ForNavbar/useSearch';
import { useNavigation } from '../../hooks/ForNavbar/useNavigation';
import { useModals } from '../../hooks/ForNavbar/useModals';
import DesktopNavLinks from './NavbarTemplates/DesktopNavLinks';
import SearchBar from './NavbarTemplates/SearchBar';
import ProfileDropdown from './NavbarTemplates/ProfileDropdown';
import MobileMenu from './NavbarTemplates/MobileMenu';

interface SearchHookReturn {
  searchQuery: string;
  searchResults: any[]; 
  showResults: boolean;
  searchContainerRef: React.RefObject<HTMLDivElement>;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCloseSearch: () => void;
  setShowResults: (show: boolean) => void;
}

interface NavigationHookReturn {
  isMenuOpen: boolean;
  isDropdownOpen: boolean;
  isAuthenticated: boolean;
  role: string;
  toggleMenu: () => void;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  closeMenu: () => void;
  handleLogout: () => void;
}

interface ModalsHookReturn {
  isPreferencesOpen: boolean;
  isProfileModalOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;
}

const Navbar: React.FC = () => {
  const {
    searchQuery,
    searchResults,
    showResults,
    searchContainerRef,
    handleSearchChange,
    handleCloseSearch,
    setShowResults
  } = useSearch() as SearchHookReturn;

  const {
    isMenuOpen,
    isDropdownOpen,
    isAuthenticated,
    role,
    toggleMenu,
    toggleDropdown,
    closeDropdown,
    closeMenu,
    handleLogout
  } = useNavigation() as NavigationHookReturn;

  const {
    isPreferencesOpen,
    isProfileModalOpen,
    openPreferences,
    closePreferences,
    openProfileModal,
    closeProfileModal
  } = useModals() as ModalsHookReturn;

  const handleOpenProfileModal = () => {
    closeDropdown();
    openProfileModal();
  };

  const handleOpenPreferences = () => {
    closeDropdown();
    openPreferences();
  };

  const handleMenuItemClick = () => {
    closeMenu();
  };

  return (
    <nav className="nav-bar-container flex items-center justify-between px-3 mdx:px-8 py-3 fixed w-full bg-black bg-opacity-75 z-50 border-b border-gray-700">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/Logo.png" alt="MovieHaven Logo" className="h-8 cursor-pointer" />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <DesktopNavLinks />

      {/* Search Bar */}
      <SearchBar 
        searchQuery={searchQuery}
        searchResults={searchResults}
        showResults={showResults}
        searchContainerRef={searchContainerRef}
        handleSearchChange={handleSearchChange}
        handleCloseSearch={handleCloseSearch}
        setShowResults={setShowResults}
      />

      {/* Desktop Profile/Auth Dropdown */}
      <ProfileDropdown 
        isAuthenticated={isAuthenticated}
        role={role}
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        handleOpenProfileModal={handleOpenProfileModal}
        handleOpenPreferences={handleOpenPreferences}
        handleLogout={handleLogout}
      />

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="mdx:hidden text-white"
        aria-label="Toggle mobile menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu 
          isAuthenticated={isAuthenticated}
          handleMenuItemClick={handleMenuItemClick}
          handleOpenProfileModal={handleOpenProfileModal}
          handleOpenPreferences={handleOpenPreferences}
          handleLogout={handleLogout}
        />
      )}

      {/* Modals */}
      <PreferencesModal
        isOpen={isPreferencesOpen}
        onRequestClose={closePreferences}
      />

      <ProfileModal 
        isOpen={isProfileModalOpen}
        onRequestClose={closeProfileModal}
      />
    </nav>
  );
};

export default Navbar;