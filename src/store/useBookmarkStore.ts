import { create } from "zustand";

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
            const response = await fetch("http://127.0.0.1:8000/api/bookmarks/", {
                headers: { Authorization: `Token ${userToken}` },
            });

            if (!response.ok) throw new Error("Failed to fetch bookmarks");

            const data = await response.json();
            set({ myList: data });
        } catch (error) {
            console.error("Error fetching bookmarks:", error);
        }
    },

    removeFromList: async (userToken, movieId) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/bookmarks/remove/${movieId}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${userToken}`,
                },
            });

            if (!response.ok) throw new Error("Failed to remove bookmark");

            set((state) => ({
                myList: state.myList.filter((item) => item.movie !== movieId),
            }));
        } catch (error) {
            console.error("Error removing bookmark:", error);
        }
    },
}));

export default useBookmarkStore;
