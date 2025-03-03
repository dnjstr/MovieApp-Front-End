import { useQuery } from "@tanstack/react-query";
import axiosInstance from '../api/axiosInstance';

interface Movie {
  id: number;
  title: string;
  poster_image: string;
  release_date: string;
  description: string;
  genre: string;
  main_cast: string;
  director: string;
  duration: string;
  average_rating: number;
}

const fetchComingSoonMovies = async (): Promise<Movie[]> => {
  const response = await axiosInstance.get("/movies/coming-soon/");
  return response.data;
};

export const useComingSoonMovies = () => {
  return useQuery<Movie[]>({
    queryKey: ["comingSoonMovies"],
    queryFn: fetchComingSoonMovies,
  });
};
