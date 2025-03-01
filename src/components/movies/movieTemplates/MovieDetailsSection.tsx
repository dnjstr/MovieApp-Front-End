import React from 'react';
import { FaArrowLeft, FaBookmark } from 'react-icons/fa';
import { NavigateFunction } from 'react-router-dom'

interface MovieDetailsSectionProps {
    movie: {
        poster_image: string;
        title: string;
        description: string;
        release_date: string;
        duration: string;
        genre: string;
        director: string;
    };
    isAuthenticated: boolean;
    isBookmarked: boolean;
    toggleBookmark: () => void;
    handleWatchNow: () => void;
    isReleased: boolean;
    navigate: NavigateFunction;
}

const MovieDetailsSection: React.FC<MovieDetailsSectionProps> = ({ movie, isAuthenticated, isBookmarked, toggleBookmark, handleWatchNow, isReleased, navigate }) => (
    <div className="p-8 w-full max-w-full">
        <button
            onClick={() => (window.history.length > 2 ? navigate(-1) : navigate('/'))}
            className="flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-b from-orange-600 to-orange-900 text-white rounded hover:bg-orange-900 transition duration-300 mt-8 shadow-md"
        >
            <FaArrowLeft /> Back
        </button>

        <div className="flex flex-col md:flex-row items-center">
            <img src={movie.poster_image} alt={movie.title} className="w-80 h-96 object-cover rounded-md shadow-lg border border-gray-700" />
            <div className="md:ml-8 text-center md:text-left">
                <h1 className="text-4xl font-bold">{movie.title}</h1>
                <p className="text-lg mt-2 text-gray-300">{movie.description}</p>
                <p className="text-sm text-gray-400 mt-2">Release Date: {movie.release_date}</p>
                <p className="text-sm text-gray-400">Duration: {movie.duration}</p>
                <p className="text-sm text-gray-400">Genre: {movie.genre}</p>
                <p className="text-sm text-gray-400">Director: {movie.director}</p>
                <div className='flex gap-4 justify-between md:justify-start'>
                    <button
                        onClick={toggleBookmark}
                        className={`bookmark-btn-hover mt-4 px-4 py-2 rounded flex items-center gap-2 ${isAuthenticated ? 'bg-gradient-to-b from-orange-600 to-orange-900 text-white' : 'bg-gray-600 text-white cursor-not-allowed'}`}
                        disabled={!isAuthenticated}
                    >
                        <FaBookmark /> {isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
                    </button>
                    <button
                        onClick={isReleased ? handleWatchNow : undefined}
                        className={`mt-4 px-4 py-2 rounded transition duration-300 ${
                            isReleased 
                                ? 'bg-gradient-to-b from-green-600 to-green-900 text-white' 
                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!isReleased}
                    >
                        {isReleased ? "Watch Now" : "Coming Soon"}
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default MovieDetailsSection;
