import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, logout, role } = useAuth();
  const navigate = useNavigate();

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);
  const closeMenu = () => setIsMenuOpen(false);

  return {
    isMenuOpen,
    isDropdownOpen,
    isAuthenticated,
    role,
    toggleMenu,
    toggleDropdown,
    closeDropdown,
    closeMenu,
    handleLogout
  };
};