import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from '../layout/Footer';

interface Movie {
    id: number;
    title: string;
    poster_image: string;
    release_date: string;
    description: string;
    average_rating: number;
}

const Popular: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/movies/coming-soon/')
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching coming soon movies:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-white text-center mt-32">Loading...</div>;
    }

    return (
        <div className="text-white p-6 mt-6">
            <h1 className="text-2xl font-bold mb-4">Coming Soon</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {movies.map((movie) => (
                    <div 
                        key={movie.id} 
                        className="relative group cursor-pointer hover:scale-105 transition-transform duration-300 w-full max-w-[240px] mx-auto"
                        onClick={() => navigate(`/movies/${movie.id}`)}
                    >
                        <div className="aspect-[2/3] relative">
                            <img
                                src={movie.poster_image}
                                alt={movie.title}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />

                            <span className="absolute top-2 left-2 bg-red-600 px-2 py-1 text-xs font-bold rounded">
                                Coming Soon
                            </span>

                            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity p-4 rounded-lg">
                                <p className="text-lg font-bold mb-2">{movie.title}</p>
                                <p className="text-sm text-gray-300 mb-2">Release Date: {movie.release_date}</p>
                                <p className="text-xs text-gray-400 line-clamp-3">{movie.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Popular;
