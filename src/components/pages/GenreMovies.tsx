import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface Movie {
    id: number;
    title: string;
    genre: string;
    main_cast: string;
    description: string;
    release_date: string;
    poster_image: string;
    average_rating: number;
}

const GenreMovies: React.FC = () => {
    const { genreName } = useParams<{ genreName: string }>();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            if (!genreName) return;

            try {
                console.log('Fetching movies for genre:', genreName);
                // Use the movies/genre endpoint instead of filter
                const response = await fetch(`http://127.0.0.1:8000/api/movies/genre/${encodeURIComponent(genreName)}/`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log('Received movies:', data);
                
                if (Array.isArray(data)) {
                    setMovies(data);
                } else {
                    console.error('Received non-array data:', data);
                    setError('Invalid data format received');
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
                setError(error instanceof Error ? error.message : 'Error loading movies');
            } finally {
                setLoading(false);
            }
        };

        fetchMoviesByGenre();
    }, [genreName]);

    if (loading) {
        return <div className="text-white text-center mt-32">Loading...</div>;
    }

    if (error) {
        return <div className="text-white text-center mt-32">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-28">
            <div className="flex items-center mb-8">
                <button
                    onClick={() => navigate('/genre')}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition duration-300"
                >
                    <FaArrowLeft /> Back to Genres
                </button>
                <h1 className="text-3xl font-bold text-white ml-4 capitalize">{genreName} Movies</h1>
            </div>

            {movies.length === 0 ? (
                <p className="text-white text-center">No movies found in this genre.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            onClick={() => navigate(`/movies/${movie.id}`)}
                            className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
                        >
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={movie.poster_image}
                                    alt={movie.title}
                                    className="w-full h-[350px] object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                        <h3 className="text-white text-lg font-bold text-center mb-2">{movie.title}</h3>
                                        <p className="text-xs text-gray-300 mb-2 line-clamp-2">{movie.main_cast}</p>
                                        <p className="text-gray-300 text-sm text-center mb-2">{movie.release_date}</p>
                                        <div className="flex items-center">
                                            <span className="text-yellow-400 text-xs">{'⭐'.repeat(Math.round(movie.average_rating))}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GenreMovies; 