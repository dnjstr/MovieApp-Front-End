import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaThLarge, FaBookmark } from 'react-icons/fa';

const DesktopNavLinks: React.FC = () => {
  return (
    <div className="hidden mdx:flex space-x-1 lg:space-x-6 text-white gap-3 text-sm">
      <Link to="/" className="flex items-center space-x-2 hover:text-orange-600 justify-center">
        <FaHome size={20} />
        <span className="hidden md:inline">Home</span>
      </Link>
      <Link to="/comingsoon" className="hover:text-orange-600 text-nowrap ease-in-out duration-300 flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
        </svg>
        Coming Soon
      </Link>
      <Link to="/genre" className="hover:text-orange-600 ease-in-out duration-300 flex items-center justify-center gap-2">
        <FaThLarge size={16} />
        Genre 
      </Link>
      <Link to="/my-list" className="hover:text-orange-600 ease-in-out duration-300 flex items-center justify-center gap-2">
        <FaBookmark size={16} />
        Bookmarks
      </Link>
    </div>
  );
};

export default DesktopNavLinks;