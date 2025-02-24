import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Movie {
    id: number;
    title: string;
    poster_image: string;
    release_date: string;
}

interface SearchResultsProps {
    results: Movie[];
    onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onClose }) => {
    const navigate = useNavigate();

    const handleMovieClick = (movieId: number) => {
        navigate(`/movies/${movieId}`);
        onClose();
    };

    if (results.length === 0) return null;

    return (
        <div className="bookmark-scroll-bar search-results-container absolute top-full left-0 w-full mt-5 border border-gray-700 rounded-md shadow-lg max-h-96 overflow-y-auto z-50">
            {results.map((movie) => (
                <div
                    key={movie.id}
                    className="flex items-center p-3 hover:bg-gray-800 cursor-pointer transition-colors duration-200"
                    onClick={() => handleMovieClick(movie.id)}
                >
                    <img
                        src={movie.poster_image}
                        alt={movie.title}
                        className="w-12 h-16 object-cover rounded"
                    />
                    <div className="ml-3">
                        <h3 className="text-white font-medium">{movie.title}</h3>
                        <p className="text-gray-400 text-sm">{movie.release_date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResults; 