import React from "react";

const movies = [
  { id: 1, title: "BATMAN(2022)", description: "Description of the movie.", image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png" },
  { id: 2, title: "SHADOW AND BONE", description: "Description of the movie.", image: "https://m.media-amazon.com/images/I/71xefrbhS8S._AC_SL1500_.jpg" },
  { id: 3, title: "US", description: "Description of the movie.", image: "https://i.ebayimg.com/images/g/FKsAAOSw8DZgGo2i/s-l1200.jpg" },
  { id: 4, title: "DUNE", description: "Description of the movie.", image: "https://vice-press.com/cdn/shop/files/dune-part-two-movie-poster-matt-ferguson_ac86f8c9-f410-450c-805b-c4352aac4a55_540x.jpg?v=1730814717" },
  { id: 5, title: "OPPENHEIMER", description: "Description of the movie.", image: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000" },
  { id: 6, title: "SMILE", description: "Description of the movie.", image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeda_6408f76710a9935109f855d4_smile-min.png" },
];

const MoviesListSection: React.FC = () => {
  return (
    <div className="px-8 py-10">
      <h2 className="text-3xl font-bold mb-6">Popular on JustWatch</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-900 text-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <img src={movie.image} alt={movie.title} className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-sm opacity-75">{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesListSection;
