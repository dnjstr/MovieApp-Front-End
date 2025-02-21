import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="container mx-auto px-4 py-8 mt-28">
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

            <div>
                <footer className=" text-gray-300 py-12">
                <div className="max-w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="flex justify-start">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-white mb-4 text-start">Quick Links</h3>
                                <div className="space-y-2  ">
                                    <a href="/about" className=" flex justify-start text-sm whitespace-nowrap hover:text-white transition-colors text-center">
                                        About Us
                                    </a>
                                    <a href="/terms" className="flex justify-start text-sm whitespace-nowrap hover:text-white transition-colors text-center">
                                        Terms of Service
                                    </a>
                                    <a href="/contact" className="flex justify-start text-sm whitespace-nowrap hover:text-white transition-colors text-center">
                                        Contact
                                    </a>
                                    <a href="/faq" className="flex justify-start text-sm whitespace-nowrap hover:text-white transition-colors text-center">
                                        FAQ
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center space-y-1">
                            <h3 className="font-semibold text-white mb-2">Contact Us</h3>
                            <div className="space-y-3 flex flex-col items-center">
                                <a
                                    href="https://web.telegram.org/"
                                    className="w-48 px-6 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    ▶️ Join Telegram
                                </a>
                                <a
                                    href="https://www.reddit.com/"
                                    className="w-48 px-6 py-1 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
                                >
                                    🐽 Join Reddit
                                </a>
                                <a
                                    href="https://x.com"
                                    className="w-48 px-6 py-1 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                                >
                                    🐤 Join Twitter
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Link to="/">
                                <img
                                    src="/Logo.png"
                                    alt="Haven Movie Logo"
                                    className="h-14 w-auto object-contain"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                        <p>© 2025 Haven Movie. All rights reserved.</p>
                    </div>
                </div>
                </footer>
            </div>
        </div>
    );
};

export default Genre;
