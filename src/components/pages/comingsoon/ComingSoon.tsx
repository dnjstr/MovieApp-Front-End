import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../api/axiosInstance";
import { usePreferences } from "../../../context/PreferencesContext";
import MovieList from "./components/MovieList";

interface Movie {
  id: number;
  title: string;
  poster_image: string;
  release_date: string;
  description: string;
  average_rating: number;
}

const fetchComingSoonMovies = async (): Promise<Movie[]> => {
  const response = await axiosInstance.get("/movies/coming-soon/");
  return response.data;
};

const ComingSoon: React.FC = () => {
  const textColor = usePreferences();
  const { data: movies = [], isLoading, isError } = useQuery<Movie[]>({
    queryKey: ["comingSoonMovies"],
    queryFn: fetchComingSoonMovies,
  });

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
