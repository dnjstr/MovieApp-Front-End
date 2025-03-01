import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const useBookmarkStatus = (id: string, isAuthenticated: boolean, token: string | null) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const checkBookmark = async () => {
            if (isAuthenticated && id) {
                try {
                    const response = await axiosInstance.get(`/bookmarks/?t=${new Date().getTime()}`, {
                        headers: {
                            'Authorization': token ? `Token ${token}` : "",
                        }
                    });
                    const bookmarks = response.data;
                    const isMovieBookmarked = bookmarks.some(
                        (bookmark: any) => bookmark.movie_id === parseInt(id, 10)
                    );
                    setIsBookmarked(isMovieBookmarked);
                } catch (err) {
                    console.error("Error fetching bookmarks:", err);
                }
            }
        };

        checkBookmark();
    }, [id, isAuthenticated, token]);

    return { isBookmarked, setIsBookmarked };
};

export default useBookmarkStatus;
