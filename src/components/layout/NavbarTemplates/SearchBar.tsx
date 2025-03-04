import React, { RefObject } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchResults from '../../search/SearchResults';
import { Movie } from '../../../types/types';

interface SearchBarProps {
  searchQuery: string;
  searchResults: Movie[];
  showResults: boolean;
  searchContainerRef: RefObject<HTMLDivElement>;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCloseSearch: () => void;
  setShowResults: (show: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  searchResults,
  showResults,
  searchContainerRef,
  handleSearchChange,
  handleCloseSearch,
  setShowResults
}) => {
  return (
    <div 
      ref={searchContainerRef}
      className="search-container flex items-center bg-gray-950 bg-opacity-70 
      px-3 py-2 rounded-md w-64 md:w-64 lg:w-1/4 xl:w-1/3 relative"
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
  );
};

export default SearchBar;