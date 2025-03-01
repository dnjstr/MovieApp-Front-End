import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const useMovieDetails = (id: string) => {
    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axiosInstance.get(`/movie/${id}/`);
                setMovie(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return { movie, setMovie, loading, error };
};

export default useMovieDetails;
