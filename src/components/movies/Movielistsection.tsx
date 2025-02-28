import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "./movieTemplates/movieCards";

const MovieListSection: React.FC = () => {
  const location = useLocation();
  const { data: movies = [], isLoading, isError } = useMovies();

  useEffect(() => {
    if (location.state?.scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, location.state.scrollPosition);
      }, 0);
    }
  }, [location]);

  return (
    <div className="px-8 py-10 mb-8">
      <h2 className="text-3xl font-bold mb-6">
        Popular on <span className="gradient-text">Movie Haven</span>
      </h2>

      <div
        className={`movie-list-container grid grid-cols-2 relative md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 
          ${movies.length === 0 ? "h-[280px]" : ""}`}
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
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default MovieListSection;
