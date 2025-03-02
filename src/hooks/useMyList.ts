import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

interface Bookmark {
  id: number;
  movie: number;
  movie_title: string;
  movie_poster: string;
  movie_release_date: string;
  movie_director: string;
}

const fetchMyList = async (token: string): Promise<Bookmark[]> => {
  const response = await axiosInstance.get("/bookmarks/", {
    headers: { Authorization: `Token ${token}` },
  });
  return response.data;
};

const removeFromMyList = async (token: string, movieId: number) => {
  const response = await axiosInstance.delete(`/bookmarks/remove/${movieId}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error("Failed to remove bookmark");
  }
};

export const useMyList = (token: string) => {
  return useQuery<Bookmark[], Error>({
    queryKey: ["bookmarks", token],
    queryFn: () => fetchMyList(token),
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};

export const useRemoveFromMyList = (token: string) => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: (movieId: number) => removeFromMyList(token, movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks", token] });
    },
  });
};
