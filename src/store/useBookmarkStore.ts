import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";

interface Bookmark {
    id: number;
    movie: number;
    movie_title: string;
    movie_poster: string;
    movie_release_date: string;
    movie_director: string;
}

interface BookmarkStore {
    myList: Bookmark[];
    fetchBookmarks: (userToken: string) => Promise<void>;
    removeFromList: (userToken: string, movieId: number) => Promise<void>;
}

const useBookmarkStore = create<BookmarkStore>((set) => ({
    myList: [],

    fetchBookmarks: async (userToken) => {
        try {
            const response = await axiosInstance.get("/bookmarks/", {
                headers: { Authorization: `Token ${userToken}` },
            });

            set({ myList: response.data });
        } catch (error) {
            console.error("Error fetching bookmarks:", error);
        }
    },

    removeFromList: async (userToken, movieId) => {
        try {
            const response = await axiosInstance.delete(`/bookmarks/remove/${movieId}/`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${userToken}`,
                },
            });

            if (response.status >= 200 && response.status < 300) {
                set((state) => ({
                    myList: state.myList.filter((item) => item.movie !== movieId),
                }));
            } else {
                console.error("Failed to remove bookmark:", response.data);
            }
        } catch (error) {
            console.error("Error removing bookmark:", error);
        }
    },
}));

export default useBookmarkStore;
