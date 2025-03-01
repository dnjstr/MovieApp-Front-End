import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

interface Review {
    id: number;
    user: {
        fullName: string;
    };
    rating: number;
    review_text: string;
    created_at: string;
}

const useMovieReviews = (id: string) => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchMovieReviews = async () => {
            try {
                const response = await axiosInstance.get(`/movie/${id}/reviews/`);
                setReviews(response.data);
            } catch (err) {
                console.error('Error fetching reviews:', err);
            }
        };

        fetchMovieReviews();
    }, [id]);

    return { reviews, setReviews };
};

export default useMovieReviews;
