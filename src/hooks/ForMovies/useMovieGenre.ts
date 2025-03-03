import axiosInstance from "../../api/axiosInstance";

export const fetchMoviesByGenre = async (genreName: string) => {
    const response = await axiosInstance.get(`/movies/genre/${encodeURIComponent(genreName)}/`);
    return response.data;
};
