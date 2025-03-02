import React from "react";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  poster_image: string;
  release_date: string;
  description: string;
  average_rating: number;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      key={movie.id}
      className="relative group cursor-pointer hover:scale-105 transition-transform duration-300 w-full max-w-[240px] mx-auto"
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className="aspect-[2/3] relative">
        <img
          src={movie.poster_image}
          alt={movie.title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <span className="absolute top-2 left-2 bg-red-600 px-2 py-1 text-xs font-bold rounded">
          Coming Soon
        </span>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity p-4 rounded-lg">
          <p className="text-lg font-bold mb-2">{movie.title}</p>
          <p className="text-sm text-gray-300 mb-2">Release Date: {movie.release_date}</p>
          <p className="text-xs text-gray-400 line-clamp-3">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
