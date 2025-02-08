import React from 'react';

const MovieListSection: React.FC = () => {
  const movies = [1, 2, 3, 4, 5, 6, 7, 8]; // Placeholder data

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Popular on Netflix</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((item) => (
          <div key={item} className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`https://via.placeholder.com/300x450`}
              alt={`Movie ${item}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Movie Title {item}</h3>
              <p className="text-gray-400">Description of the movie.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieListSection;