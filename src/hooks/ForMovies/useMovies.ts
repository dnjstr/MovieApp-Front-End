import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

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
    throw error;
}
};

export const useMovies = () => {
    return useQuery({ queryKey: ["movies"], queryFn: fetchMovies });
};