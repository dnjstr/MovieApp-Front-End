import { useState, useRef } from 'react';
import { debounce } from 'lodash';
import { useClickOutside } from '../../hooks/useClickOutside';
import axiosInstance from "../../api/axiosInstance";
import { Movie } from '../../types/types';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

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

  const debouncedSearch = useRef(debounce(searchMovies, 300)).current;

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

  return {
    searchQuery,
    searchResults,
    showResults,
    searchContainerRef,
    handleSearchChange,
    handleCloseSearch,
    setShowResults
  };
};