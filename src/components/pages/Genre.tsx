import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';

interface GenreCount {
    genre: string;
    count: number;
}

const genreIcons: { [key: string]: { icon: string; color: string } } = {
    'Action': { icon: '🚀', color: 'bg-red-500' },
    'Drama': { icon: '🎭', color: 'bg-blue-500' },
    'Comedy': { icon: '😄', color: 'bg-yellow-500' },
    'Horror': { icon: '💀', color: 'bg-purple-500' },
    'Romance': { icon: '❤️', color: 'bg-pink-500' },
    'Adult': { icon: '🍆', color: 'bg-green-500' },
    'Musical': { icon: '🎵', color: 'bg-indigo-500' },
    'Mystery': { icon: '🦇', color: 'bg-orange-500' },
    'Fantasy': { icon: '🧙‍♂️', color: 'bg-purple-600' },
    'Adventure': { icon: '🗺️', color: 'bg-green-600' },
    'Family': { icon: '👨‍👩‍👧‍👦', color: 'bg-blue-400' },
    'Fairy Tale': { icon: '🧚‍♀️', color: 'bg-pink-400' },
    'Space Opera': { icon: '👽', color: 'bg-indigo-400' },
    'Science Fiction': { icon: '🤖', color: 'bg-red-400' },
    'Thriller': { icon: '🔪', color: 'bg-gray-500' },
    'Suspense': { icon: '🕵️', color: 'bg-gray-600' },
    
};

const Genre: React.FC = () => {
    const [genreCounts, setGenreCounts] = useState<GenreCount[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGenreCounts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/genres/');
                const data = await response.json();

                if (response.ok) {
                    if (Array.isArray(data)) {
                        let validGenres;
                        if (typeof data[0] === 'string') {
                            // Handle array of strings
                            validGenres = data.map(genre => ({
                                genre: genre,
                                count: 0  // We don't have counts in this format
                            }));
                        } else {
                            // Handle array of objects
                            validGenres = data.filter(item => 
                                item && item.genre && typeof item.genre === 'string'
                            );
                        }
                        setGenreCounts(validGenres);
                    } else {
                        console.error('Received non-array data:', data);
                        setError('Invalid data format received');
                    }
                } else {
                    console.error('Response not OK:', response.status);
                    setError('Failed to fetch genres');
                }
            } catch (error) {
                console.error('Error fetching genre counts:', error);
                setError('Error loading genres');
            } finally {
                setLoading(false);
            }
        };

        fetchGenreCounts();
    }, []);

    if (loading) {
        return <div className="text-white text-center mt-32">Loading...</div>;
    }

    if (error) {
        return <div className="text-white text-center mt-32">Error: {error}</div>;
    }

    if (genreCounts.length === 0) {
        return <div className="text-white text-center mt-32">No genres found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 flex justify-between flex-col h-screen mt-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-white">Browse by Genre</h1>
                <p className="text-gray-400">Discover your next favorite movie across multiple genres</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {genreCounts.map((genre) => {
                    if (!genre.genre) return null;
                    
                    const genreName = genre.genre.trim();
                    return (
                        <Link 
                            key={genreName}
                            to={`/genre/${genreName.toLowerCase()}`}
                            className="relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-800 rounded-lg"
                        >
                            <div className={`absolute inset-0 ${genreIcons[genreName]?.color || 'bg-gray-500'} opacity-10 hover:opacity-20 transition-opacity duration-300`} />
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`${genreIcons[genreName]?.color || 'bg-gray-500'} text-white p-3 rounded-lg`}>
                                        <span className="text-2xl">{genreIcons[genreName]?.icon || '🎬'}</span>
                                    </div>
                                    <span className="text-sm text-gray-400">{genre.count || 0} Movies</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white hover:text-blue-400 transition-colors duration-300">
                                    {genreName}
                                </h3>
                                <div className="h-1 w-12 bg-gray-700 group-hover:w-full group-hover:bg-blue-500 transition-all duration-300" />
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className=''>
                <Footer/>
            </div>
        </div>
    );
};

export default Genre;
