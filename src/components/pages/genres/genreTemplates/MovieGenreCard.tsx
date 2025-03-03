import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../../../types/types";

interface MovieCardProps {
    movie: Movie;
    setSelectedMovie: (movie: Movie) => void;
}

const MovieGenreCard: React.FC<MovieCardProps> = ({ movie, setSelectedMovie }) => {
    const navigate = useNavigate();

    return (
        <div
            onMouseEnter={() => setSelectedMovie(movie)}
            onClick={() => navigate(`/movies/${movie.id}`)}
            className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 w-[190px]"
        >
            <div className="relative overflow-hidden rounded-lg">
                <img
                    src={movie.poster_image}
                    alt={movie.title}
                    className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity p-4 rounded-lg">
                    <p className="text-lg font-bold mb-2">{movie.title}</p>
                    <p className="text-xs text-gray-400 line-clamp-3 mb-2">{movie.main_cast}</p>
                    <p className="text-xs text-gray-300 mb-2">Release Date: {movie.release_date}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-400 text-xs">{"⭐".repeat(Math.round(movie.average_rating))}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieGenreCard;
