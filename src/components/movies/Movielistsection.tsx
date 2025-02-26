import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../api/axiosInstance';

interface Movie {
  id: number;
  title: string;
  main_cast: string;
  poster_image: string;
  release_date: string;
  average_rating: number;
}

const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axiosInstance.get('/movies/released/');
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    throw error; // Ensures TanStack Query recognizes the error
  }
};

const MovieListSection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data: movies = [], isLoading, isError } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });

  useEffect(() => {
    if (location.state?.scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, location.state.scrollPosition);
      }, 0);
    }
  }, [location]);

  const handleMovieClick = (id: number) => {
    const scrollPosition = window.pageYOffset;
    navigate(`/movies/${id}`, { state: { scrollPosition } });
  };

  return (
    <div className="px-8 py-10 mb-8">
      <h2 className="text-3xl font-bold mb-6">
        Popular on <span className="gradient-text">Movie Haven</span>
      </h2>

      <div
        className={`movie-list-container grid grid-cols-2 relative md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 
          ${movies.length === 0 ? 'h-[280px]' : ''}`}
      >
        {isLoading ? (
          <div className="text-green-500 text-center my-6 absolute top-28 left-1/2 transform -translate-x-1/2">
            Loading...
          </div>
        ) : isError ? ( 
          <div className="text-red-500 text-center my-6 absolute top-28 left-1/2 transform -translate-x-1/2">
            Error loading movies.
          </div>
        ) : movies.length === 0 ? (
          <div className="text-white text-center my-6 absolute top-28 left-1/2 transform -translate-x-1/2">
            No movies found.
          </div>
        ) : (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="relative group cursor-pointer hover:scale-105 transition-transform duration-300 w-full max-w-[240px] mx-auto mt-6"
              onClick={() => handleMovieClick(movie.id)}
            >
              <div className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={movie.poster_image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{movie.title}</h3>
                  <p className="text-xs text-gray-300 mb-2 line-clamp-2">{movie.main_cast}</p>
                  <p className="text-xs text-gray-400">Released: {movie.release_date}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400 text-xs">{'⭐'.repeat(Math.round(movie.average_rating))}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieListSection;
