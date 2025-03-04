// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaSearch, FaBars, FaTimes, FaUser, FaCog, FaSignOutAlt, FaThLarge, FaBookmark } from 'react-icons/fa';
// import SearchResults from '../search/SearchResults';
// import PreferencesModal from '../preference/PreferencesModal';
// import ProfileModal from '../profile/ProfileModal';
// import { useSearch } from '../../hooks/ForNavbar/useSearch';
// import { useNavigation } from '../../hooks/ForNavbar/useNavigation';
// import { useModals } from '../../hooks/ForNavbar/useModals';

// const Navbar: React.FC = () => {

//   const {
//     searchQuery,
//     searchResults,
//     showResults,
//     searchContainerRef,
//     handleSearchChange,
//     handleCloseSearch,
//     setShowResults
//   } = useSearch();

//   const {
//     isMenuOpen,
//     isDropdownOpen,
//     isAuthenticated,
//     role,
//     toggleMenu,
//     toggleDropdown,
//     closeDropdown,
//     closeMenu,
//     handleLogout
//   } = useNavigation();

//   const {
//     isPreferencesOpen,
//     isProfileModalOpen,
//     openPreferences,
//     closePreferences,
//     openProfileModal,
//     closeProfileModal
//   } = useModals();

//   const handleOpenProfileModal = () => {
//     closeDropdown();
//     openProfileModal();
//   };

//   const handleOpenPreferences = () => {
//     closeDropdown();
//     openPreferences();
//   };

//   const handleMenuItemClick = () => {
//     closeMenu();
//   };

//   return (
//     <nav className="nav-bar-container flex items-center justify-between px-3 mdx:px-8 py-3 fixed w-full bg-black bg-opacity-75 z-50 border-b border-gray-700">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <Link to="/">
//           <img src="/Logo.png" alt="MovieHaven Logo" className="h-8 cursor-pointer" />
//         </Link>
//       </div>

//       {/* Desktop Navigation Links */}
//       <div className="hidden mdx:flex space-x-1 lg:space-x-6 text-white gap-3 text-sm">
//         <Link to="/" className="flex items-center space-x-2 hover:text-orange-600 justify-center">
//           <FaHome size={20} />
//           <span className="hidden md:inline">Home</span>
//         </Link>
//         <Link to="/comingsoon" className="hover:text-orange-600 text-nowrap ease-in-out duration-300 flex items-center justify-center gap-2">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
//             <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
//           </svg>
//           Coming Soon
//         </Link>
//         <Link to="/genre" className="hover:text-orange-600 ease-in-out duration-300 flex items-center justify-center gap-2">
//           <FaThLarge size={16} />
//           Genre 
//         </Link>
//         <Link to="/my-list" className="hover:text-orange-600 ease-in-out duration-300 flex items-center justify-center gap-2">
//           <FaBookmark size={16} />
//           Bookmarks
//         </Link>
//       </div>

//       {/* Search Bar */}
//       <div 
//         ref={searchContainerRef}
//         className="search-container flex items-center bg-gray-950 bg-opacity-70 
//         px-3 py-2 rounded-md w-64 md:w-64 lg:w-1/4 xl:w-1/3 relative"
//       >
//         <FaSearch className="text-white search-icon" />
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           onFocus={() => setShowResults(true)}
//           placeholder="Search for Movies or TV shows"
//           className="header-search-bar bg-transparent border-none text-white px-3 outline-none w-full hover:input-hover"
//         />
//         {showResults && searchResults.length > 0 && (
//           <SearchResults 
//             results={searchResults} 
//             onClose={handleCloseSearch}
//           />
//         )}
//       </div>

//       {/* Desktop Profile/Auth Dropdown */}
//       <div className="hidden mdx:flex items-center space-x-4 relative">
//         {isAuthenticated && role === 'user' ? (
//           <div className="relative">
//             <button
//               className="profile-button border border-orange-700 text-orange-100 hover:bg-orange-700 px-4 py-2 rounded-md flex items-center space-x-2"
//               onClick={toggleDropdown}
//             >
//               <FaUser />
//               <span>Profile</span>
//             </button>

//             {isDropdownOpen && (
//               <div className="profile-dropdown-desktop absolute top-[50px] right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-10 border border-gray-700">
//                 <button
//                   className="px-4 py-2 text-sm text-white hover:bg-orange-600 hover:rounded-tl-md hover:rounded-tr-md flex items-center justify-end space-x-2 w-full border-b border-gray-700"
//                   onClick={handleOpenProfileModal}
//                 >
//                   <span>My Profile</span>
//                   <FaUser className="text-sm" />
//                 </button>

//                 <button
//                   className="px-4 py-2 w-full text-sm text-white hover:bg-orange-600 flex items-center space-x-2 justify-end"
//                   onClick={handleOpenPreferences}
//                 >
//                   <span>Preferences</span>
//                   <FaCog className="text-sm" />
//                 </button>

//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 text-sm text-white hover:bg-orange-600 hover:rounded-bl-md hover:rounded-br-md flex items-center space-x-2 justify-end border-t border-gray-700"
//                 >
//                   <span>Sign Out</span>
//                   <FaSignOutAlt className="text-sm" />
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link 
//             to="/sign-in" 
//             className="signin-navbar-btn border border-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300"
//           >
//             Sign In
//           </Link>
//         )}
//       </div>

//       {/* Mobile Menu Toggle */}
//       <button
//         onClick={toggleMenu}
//         className="mdx:hidden text-white"
//         aria-label="Toggle mobile menu"
//       >
//         {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </button>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-[59px] text-sm w-[99%] right-0 mx-1 bg-black rounded-md flex flex-col items-end py-4 space-y-4 md:hidden border border-gray-700">
//           <div className='flex justify-around w-full'>
//             <Link to="/" className="text-white hover:text-orange-600" onClick={handleMenuItemClick}>Home</Link>
//             <Link to="/comingsoon" className="text-white hover:text-orange-600" onClick={handleMenuItemClick}>Coming Soon</Link>
//             <Link to="/genre" className="text-white hover:text-orange-600" onClick={handleMenuItemClick}>Genre</Link>
//             <Link to="/my-list" className="text-white hover:text-orange-600" onClick={handleMenuItemClick}>Bookmarks</Link>
//           </div>
//           <div className='h-[1px] w-full bg-gray-700'></div>
//           <div className="relative text-sm w-full flex justify-end">
//             {isAuthenticated ? (
//               <>
//                 <button
//                   className="px-4 flex py-2 text-sm text-white hover:bg-orange-600 w-full rounded-md justify-center"
//                   onClick={handleOpenProfileModal}
//                 >
//                   <FaUser className="mt-[2px] mr-2" />
//                   <span>My Profile</span>
//                 </button>

//                 <button
//                   className="flex px-4 py-2 text-white hover:bg-orange-600 w-full rounded-md justify-center"
//                   onClick={handleOpenPreferences}
//                 >
//                   <FaCog className="mt-1 mr-2" />
//                   <span>Preferences</span>
//                 </button>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 text-white flex hover:bg-orange-600 rounded-md justify-center"
//                 >
//                   <FaSignOutAlt className="mt-1 mr-2" />
//                   Sign Out
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/sign-in"
//                   className="px-4 py-2 flex text-white hover:bg-orange-600 rounded-md"
//                   onClick={handleMenuItemClick}
//                 >
//                   <FaSignOutAlt className="mt-1 mr-2" />
//                   Sign In
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Modals */}
//       <PreferencesModal
//         isOpen={isPreferencesOpen}
//         onRequestClose={closePreferences}
//       />

//       <ProfileModal 
//         isOpen={isProfileModalOpen}
//         onRequestClose={closeProfileModal}
//       />
//     </nav>
//   );
// };

// export default Navbar;