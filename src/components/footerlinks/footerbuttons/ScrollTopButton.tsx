import React from 'react';

interface ScrollToTopButtonProps {
  isVisible: boolean;
  className?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ 
  isVisible, 
  className = ""
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const baseClasses = `fixed border border-gray-700 bg-orange-600 text-white p-4 rounded-full 
    transition-opacity duration-300 hover:bg-orange-800 z-50 
    ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  
  return (
    <button
      className={`${baseClasses} ${className}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;