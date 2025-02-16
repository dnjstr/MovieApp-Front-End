
import { Link } from 'react-router-dom';

const genres = [
  { 
    name: 'Action', 
    icon: '🚀', 
    count: '2 Movies', 
    description: 'High-octane thrills and excitement',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    featured: true
  },
  { 
    name: 'Drama', 
    icon: '🎭', 
    count: '12 Movies', 
    description: 'Compelling emotional stories',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    featured: false
  },
  { 
    name: 'Comedy', 
    icon: '😄', 
    count: '7 Movies', 
    description: 'Laugh-out-loud entertainment',
    gradient: 'from-yellow-400 via-orange-400 to-red-400',
    featured: false
  },
  { 
    name: 'Horror', 
    icon: '💀', 
    count: '4 Movies', 
    description: 'Spine-chilling experiences',
    gradient: 'from-purple-600 via-red-500 to-purple-800',
    featured: false
  },
  { 
    name: 'Romance', 
    icon: '❤️', 
    count: '6 Movies', 
    description: 'Love stories that touch the heart',
    gradient: 'from-pink-400 via-red-400 to-orange-400',
    featured: true
  },
  { 
    name: 'Adult', 
    icon: '🍆', 
    count: '4 Movies', 
    description: 'Mature content and themes sex sex',
    gradient: 'from-red-400 via-red-400 to-orange-400',
    featured: true
  },
  { 
    name: 'Musical', 
    icon: '🎵', 
    count: '30 Movies', 
    description: 'Spectacular song and dance',
    gradient: 'from-indigo-400 via-purple-400 to-pink-400',
    featured: false
  },
  { 
    name: 'Mystery', 
    icon: '🦇', 
    count: '2 Movies', 
    description: 'Intriguing puzzles to solve',
    gradient: 'from-gray-600 via-gray-700 to-gray-800',
    featured: false
  },
];

const Genre = () => {
  const featuredGenres = genres.filter(genre => genre.featured);
  const regularGenres = genres.filter(genre => !genre.featured);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative  overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto  px-4">
          <h1 className="text-5xl lg:text-5xl font-bold text-white mb-6 text-center">
            Discover <span className="text-orange-500">Movies</span>
          </h1>
          <p className="text-x text-gray-400 text-center max-w-2xl mx-auto">
            Explore our vast collection of movies across different genres
          </p>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-800/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-900/20 rounded-full filter blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 ">
        {/* Featured Genres Section Scrolll*/}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-orange-500- mb-6">Featured Genres</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredGenres.map((genre) => (
              <Link 
                key={genre.name}
                to={`/genre/${genre.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-2xl h-96 lg:h-80"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${genre.gradient} opacity-20 group-hover:opacity-30 
                transition-all duration-500`} />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500" />
                
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-orange-500 p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">
                      <span className="text-3xl">{genre.icon}</span>
                    </div>
                    <span className="bg-black/60 text-orange-300 px-4 py-2 rounded-full text-sm">
                      {genre.count}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{genre.name}</h3>
                    <p className="text-gray-300 mb-">{genre.description}</p>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 
                    transition-all duration-500">
                      Explore →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Regular Genres Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-orange-500- mb-6">All Genres</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {regularGenres.map((genre) => (
              <Link
                key={genre.name}
                to={`/genre/${genre.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-xl p-6 bg-gray-900/50 hover:bg-gray-900 
                transition-all duration-500"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl">{genre.icon}</span>
                  <span className="text-sm text-orange-300">{genre.count}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{genre.name}</h3>
                <div className="h-1 w-8 bg-orange-500 group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Total Movies', value: '69' },
            { label: 'Users', value: '2' },
            { label: 'Categories', value: '8' },
            { label: 'Coming Soon', value: '3' }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-gray-900/50">
              <h4 className="text-3xl font-bold text-orange-500 mb-2">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

    {/* Footer */}
      <div className="mt-12 pt-2 border-t border-gray-800 text-center text-sm">

        </div>
    <footer className="mt-9 text-gray-300">
      <div className="max-w">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-white text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
                <Link to="/about" className="block text-sm hover:text-white transition-colors">
                    About Us
                </Link>
              <Link to="/TermsandCondition" className="block text-sm hover:text-white transition-colors">
                  Terms of Service
              </Link>
              <Link to="/contact" className="block text-sm hover:text-white transition-colors">
                  Contact
              </Link>
              <Link to="/faq" className="block text-sm hover:text-white transition-colors">
                  FAQ
              </Link>
            </div>
            </div>

              {/* Social Links */}
            <div className="flex flex-col items-center">
               <h3 className="font-semibold text-white text-lg mb-4">Contact Us</h3>
              <div className="space-y-3 w-full max-w-48">
                <a
                  href="https://web.telegram.org/"
                  className="flex items-center justify-center px-6 py-1 bg-blue-600 text-white rounded-full 
                  hover:bg-blue-700 transition-colors"
                >
                  ▶️ Join Telegram
                </a>
                 <a
                  href="https://www.reddit.com/"
                  className="flex items-center justify-center px-6 py-1 bg-orange-600 text-white rounded-full 
                  hover:bg-orange-700 transition-colors"
                >
                  🐽 Join Reddit
                </a>
                 <a
                  href="https://x.com"
                   className="flex items-center justify-center px-6 py-1 bg-sky-500 text-white rounded-full 
                  hover:bg-sky-600 transition-colors"
                >
                    🐤 Join Twitter
                </a>
               </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center md:justify-end items-start">
              <Link to="/">
                <img
                  src="/Logo.png"
                  alt="Haven Movie Logo"
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>
          </div>

            {/* Copyright */}
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
