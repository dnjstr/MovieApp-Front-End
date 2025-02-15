import React from 'react';
import { Link } from 'react-router-dom';


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

      <div>
        <footer className=" text-gray-300 py-12">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex justify-start">
              <div className="space-y-2 pr-16">
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/about" className="block text-sm whitespace-nowrap 
                  hover:text-white transition-colors">
                    About Us
                  </Link>
                  <Link to="/TermsandCondition" className="block text-sm whitespace-nowrap 
                  hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <Link to="/contact" className="block text-sm whitespace-nowrap 
                  hover:text-white transition-colors">
                    Contact
                  </Link>
                  <Link to="/faq" className="block text-sm whitespace-nowrap 
                  hover:text-white transition-colors">
                    FAQ
                  </Link>
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
