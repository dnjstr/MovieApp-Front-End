import axiosInstance from "../../api/axiosInstance";

export const fetchMovies = async () => {
  const response = await axiosInstance.get("/movies/");
  return response.data;
};
