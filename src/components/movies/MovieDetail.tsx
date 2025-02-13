import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const MovieDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<any>(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/movie/${id}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Movie not found');
                }
                return response.json();
            })
            .then((data) => {
                setMovie(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-white text-center mt-10">Loading...</div>;
    }

    if (error || !movie) {
        return <div className="text-white text-center mt-10">{error || 'Movie not found.'}</div>;
    }

    return (
        <div className="relative text-white bg-black min-h-screen flex flex-col items-start">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${movie.poster_image})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>

            <div className="relative z-10 p-8 w-full max-w-full">
                <button
                    onClick={() => (window.history.length > 2 ? navigate(-1) : navigate('/'))}
                    className="flex items-center gap-2 mb-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-900 transition duration-300 mt-8 shadow-md"
                >
                    <FaArrowLeft /> Back
                </button>

                <div className="flex flex-col md:flex-row items-center">
                    <img src={movie.poster_image} alt={movie.title} className="w-80 h-96 object-cover rounded-md shadow-lg border border-gray-700" />
                    <div className="md:ml-8 text-center md:text-left">
                        <h1 className="text-4xl font-bold">{movie.title}</h1>
                        <p className="text-lg mt-2 text-gray-300">{movie.description}</p>
                        <p className="text-sm text-gray-400 mt-2">Release Date: {movie.release_date}</p>
                        <p className="text-sm text-gray-400">Duration: {movie.duration}</p>
                        <p className="text-sm text-gray-400">Genre: {movie.genre}</p>
                        <p className="text-sm text-gray-400">Director: {movie.director}</p>
                    </div>
                </div>

                {movie.main_cast && (
                    <>
                        <h2 className="text-2xl font-bold mt-6 text-center border-b border-orange-600 pb-2">Main Cast</h2>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                            {movie.main_cast.split(',').map((actor: string, index: number) => (
                                <span key={index} className="main-cast-bg px-3 py-1 text-white rounded-md shadow-md">
                                    {actor.trim()}
                                </span>
                            ))}
                        </div>
                    </>
                )}

                <h2 className="text-2xl font-bold mt-6 text-center border-b border-orange-600 pb-2">Ratings & Reviews</h2>
                <div className="text-center mt-4">
                    <p className="text-yellow-400 text-xl">{'⭐'.repeat(Math.round(movie.average_rating))}</p>
                    <p className="text-sm text-gray-400">Average Rating: {movie.average_rating} / 10</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
