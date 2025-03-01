import React from "react";
import { useComingSoonMovies } from "../../../hooks/useComingSoon"; 
import { usePreferences } from "../../../context/PreferencesContext";
import MovieList from "./components/MovieList";

const ComingSoon: React.FC = () => {
  const textColor = usePreferences();
  const { data: movies = [], isLoading, isError } = useComingSoonMovies();

  if (isLoading) {
    return <div className="text-white text-center my-[382px]">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-500 text-center my-[382px]">Error loading movies.</div>;
  }

  return (
    <div className={`${textColor} p-6 mt-7`}>
      <div className="my-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Coming Soon</h1>
        <p className={`${textColor} text-center`}>Discover the latest movies and TV shows coming soon.</p>
      </div>

      <div className="flex flex-col justify-between h-[537px]">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default ComingSoon;
