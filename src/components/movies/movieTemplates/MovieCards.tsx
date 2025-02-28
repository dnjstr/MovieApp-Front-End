import React from "react";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  main_cast: string;
  poster_image: string;
  release_date: string;
  average_rating: number;
}

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    const scrollPosition = window.pageYOffset;
    navigate(`/movies/${movie.id}`, { state: { scrollPosition } });
  };

  return (
    <div
      className="relative group cursor-pointer hover:scale-105 transition-transform duration-300 w-full max-w-[240px] mx-auto mt-6"
      onClick={handleMovieClick}
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
            <span className="text-yellow-400 text-xs">
              {"⭐".repeat(Math.round(movie.average_rating))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
