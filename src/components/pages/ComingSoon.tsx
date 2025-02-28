import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";
import { usePreferences } from "../../context/PreferencesContext";

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
  const navigate = useNavigate();
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
