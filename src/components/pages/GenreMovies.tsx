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
    const [randomMovie, setRandomMovie] = useState<Movie | null>(null);
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

                    // Select a random movie
                    const randomIndex = Math.floor(Math.random() * data.length);
                    setRandomMovie(data[randomIndex]);
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
            {/* <div className="movie-genre-overlay absolute top-0 left-0 w-full h-full z-0">
                <img src={randomMovie?.poster_image} alt="Movie poster" className='w-full h-full object-cover' />
            </div> */}
            <div className="relative z-10">
                <div className="flex justify-between mb-8">
                    <div className="flex flex-col gap-2">
                        <div>
                            <button
                                onClick={() => navigate('/genre')}
                                className="flex items-center gap-2 px-4 py-2 text-white rounded bg-gradient-to-b from-orange-600 to-orange-900 transition duration-300"
                            >
                                <FaArrowLeft /> Back
                            </button>
                        </div>
                        <div className='flex items-center gap-5'>
                            {randomMovie && (
                                <img src={randomMovie.poster_image} alt="Movie poster" className='rounded w-[175px] h-[250px]' />
                            )}
                            <div className='flex flex-col justify-start h-[100px]'>
                                <p className='text-2xl font-bold'>{randomMovie?.title}</p>
                                <div className='w-[1310px]'>
                                    <div className='text-gray-400 text-sm ps-1'>
                                        {infoType === 'description' && (
                                            <p>{randomMovie?.description}</p>
                                        )}
                                        {infoType === 'genreRelease' && (
                                            <>
                                                {randomMovie?.genre && <p>{randomMovie.genre}</p>}
                                                {randomMovie?.release_date && <p>{randomMovie.release_date}</p>}
                                                {randomMovie?.duration && <p>{randomMovie.duration}</p>}
                                            </>
                                        )}
                                        {infoType === 'mainCastDirector' && (
                                            <>
                                                {randomMovie?.main_cast && <p>Main Cast: {randomMovie.main_cast}</p>}
                                                {randomMovie?.director && <p>Director: {randomMovie.director}</p>}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-white capitalize mt-3">{genreName} Movies</h1>
                </div>
                {movies.length === 0 ? (
                    <p className="text-white text-center">No movies found in this genre.</p>
                ) : (
                    <div className="genre-scroll-bar overflow-x-scroll genre-movies-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-8 border-t-4 border-orange-700 rounded px-5 py-4">
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
                                        className="w-full h-[300px] object-cover rounded-lg"
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
        </div>
    );
};

export default GenreMovies;
