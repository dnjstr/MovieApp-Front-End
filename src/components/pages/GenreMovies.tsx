import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface Movie {
    id: number;
    title: string;
    genre: string;
    main_cast: string;
    director: string;
    description: string;
    release_date: string;
    duration: string;
    poster_image: string;
    average_rating: number;
}

const GenreMovies: React.FC = () => {
    const { genreName } = useParams<{ genreName: string }>();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [infoType, setInfoType] = useState<'description' | 'genreRelease' | 'mainCastDirector'>('description');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            if (!genreName) return;

            try {
                const response = await fetch(`http://127.0.0.1:8000/api/movies/genre/${encodeURIComponent(genreName)}/`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                if (Array.isArray(data)) {
                    setMovies(data);
                    setSelectedMovie(data[Math.floor(Math.random() * data.length)]); 
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

    useEffect(() => {
        const interval = setInterval(() => {
            setInfoType((prev) =>
                prev === 'description'
                    ? 'genreRelease'
                    : prev === 'genreRelease'
                    ? 'mainCastDirector'
                    : 'description'
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <div className="text-white text-center mt-32">Loading...</div>;
    }

    if (error) {
        return <div className="text-white text-center mt-32">Error: {error}</div>;
    }

    return (
        <div className="genre-movies-page mx-auto px-32 py-8 pt-28 z-10">
            {/* Background Header Section */}
            <div 
                className="relative z-10 p-6 rounded-lg transition-all duration-500 flex items-center" 
                style={{ 
                    height: '400px',
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${selectedMovie?.poster_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    transition: 'background-image 0.5s ease-in-out',
                    zIndex: 1
                }}
            >
                {/* Back Button */}
                <button
                    onClick={() => navigate('/genre')}
                    className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 text-white rounded bg-gradient-to-b from-orange-600 to-orange-900 transition duration-300"
                >
                    <FaArrowLeft /> Back
                </button>

                {/* Movie Details */}
                <div className="px-6 text-white flex flex-col h-[100px]">
                    <p className="text-3xl font-bold">{selectedMovie?.title}</p>
                    <div className="text-gray-400 text-sm ps-3">
                        {infoType === 'description' && <p>{selectedMovie?.description}</p>}
                        {infoType === 'genreRelease' && (
                            <>
                                <p>{selectedMovie?.genre}</p>
                                <p>{selectedMovie?.release_date}</p>
                                <p>{selectedMovie?.duration}</p>
                            </>
                        )}
                        {infoType === 'mainCastDirector' && (
                            <>
                                <p>Main Cast: {selectedMovie?.main_cast}</p>
                                <p>Director: {selectedMovie?.director}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Movies Grid Section */}
            <div className="mb-2 mt-5">
                <h1 className="text-3xl font-bold text-white capitalize">{genreName} Movies</h1>
            </div>
            {movies.length === 0 ? (
                <p className="text-white text-center">No movies found in this genre.</p>
            ) : (
                <div className="genre-scroll-bar overflow-x-scroll genre-movies-container grid grid-flow-col auto-cols-max gap-8 border-t-4 border-orange-700 rounded px-5 py-4 h-[342px]">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            onMouseEnter={() => setSelectedMovie(movie)}
                            onClick={() => navigate(`/movies/${movie.id}`)}
                            className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 w-[190px]"
                        >
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={movie.poster_image}
                                    alt={movie.title}
                                    className="w-full h-[300px] object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity p-4 rounded-lg">
                                    <p className="text-lg font-bold mb-2">{movie.title}</p>
                                    <p className="text-xs text-gray-400 line-clamp-3 mb-2">{movie.main_cast}</p>
                                    <p className="text-xs text-gray-300 mb-2">Release Date: {movie.release_date}</p>
                                    <div className="flex items-center mt-2">
                                        <span className="text-yellow-400 text-xs">{'⭐'.repeat(Math.round(movie.average_rating))}</span>
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
