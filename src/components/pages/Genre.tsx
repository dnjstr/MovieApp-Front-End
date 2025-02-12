import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';

const genres = [
  { name: 'Action', icon: '🚀', color: 'bg-red-500', count: '2 Movies' },
  { name: 'Drama', icon: '🎭', color: 'bg-blue-500', count: '12 Movies' },
  { name: 'Comedy', icon: '😄', color: 'bg-yellow-500', count: '7 Movies' },
  { name: 'Horror', icon: '💀', color: 'bg-purple-500', count: '4 Movies' },
  { name: 'Romance', icon: '❤️', color: 'bg-pink-500', count: '6 Movies' },
  { name: 'Adult', icon: '🍆', color: 'bg-green-500', count: '4 Movies' },
  { name: 'Musical', icon: '🎵', color: 'bg-indigo-500', count: '30 Movies' },
  { name: 'Mystery', icon: '🦇', color: 'bg-orange-500', count: '2 Movies' },
];

const Genre: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-28">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Browse by Genre</h1>
        <p className="text-gray-400">Discover your next favorite movie across multiple genres</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {genres.map((genre) => (
          <Link 
            key={genre.name} 
            to={`/genre/${genre.name.toLowerCase()}`} 
            className="relative overflow-hidden hover:shadow-xl transition-all 
            duration-300 cursor-pointer bg-gray-800 rounded-lg"
          >
            <div className={`absolute inset-0 ${genre.color} opacity-10 
            hover:opacity-20 transition-opacity duration-300`} />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${genre.color} text-white p-3 rounded-lg`}>
                  <span className="text-2xl">{genre.icon}</span>
                </div>
                <span className="text-sm text-gray-400">{genre.count}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white hover:text-blue-400 
              transition-colors duration-300">
                {genre.name}
              </h3>
              <div className="h-1 w-12 bg-gray-700 group-hover:w-full group-hover:bg-blue-500 
              transition-all duration-300" />
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Genre;
