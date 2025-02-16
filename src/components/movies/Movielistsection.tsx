import React, { useState, useEffect } from 'react';
import Footer from '../layout/Footer';
import { useNavigate, useLocation } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  main_cast: string;
  poster_image: string;
  release_date: string;
}

const MovieListSection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restore scroll position when navigating back
    if (location.state && location.state.scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, location.state.scrollPosition);
      }, 0);
    }
  }, [location]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/movies/released/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          console.error('Received non-array data:', data);
          setMovies([]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching released movies:', error);
        setMovies([]);
        setLoading(false);
      });
  }, []);

  const handleMovieClick = (id: number) => {
    // Save current scroll position before navigating
    const scrollPosition = window.pageYOffset;
    navigate(`/movies/${id}`, { state: { scrollPosition } });
  };

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div className="px-8 py-10">
      <h2 className="text-3xl font-bold mb-6">
        Popular on <span className='gradient-text'>Movie Haven</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative group movie-card-bg text-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer mb-4"
            onClick={() => handleMovieClick(movie.id)}
          >
            <div className='movie-card-photo w-full p-1 flex justify-center rounded-md'>
              <img 
                src={movie.poster_image} 
                alt={movie.title} 
                className="w-full h-[350px] object-cover rounded-md" 
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <h3 className="text-lg font-semibold text-white px-2">{movie.title}</h3>
              <p className="text-xs text-gray-300 mt-1 px-3">{movie.main_cast}</p>
              <p className="text-xs text-gray-400 mt-1">Released: {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-4'>
        <Footer />
      </div>
    </div>
  );
};

export default MovieListSection;
