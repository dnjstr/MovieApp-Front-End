import React from 'react';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';

const movies = [
  { id: 1, title: "BATMAN(2022)", cast: "Cast: Robert Pattinson, Zoe Kravitz ", image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png" },
  { id: 2, title: "SHADOW AND BONE", cast: "Cast: Jessie Mei Li, Ben Barnes ", image: "https://m.media-amazon.com/images/M/MV5BZWM1NTJiNzUtYTJlYy00NWYyLTliNjUtN2FjNzdkOWQxNWRjXkEyXkFqcGc@._V1_.jpg" },
  { id: 3, title: "US", cast: "Cast: Lupita Nyong'o, Winston Duke ", image: "https://i.ebayimg.com/images/g/FKsAAOSw8DZgGo2i/s-l1200.jpg" },
  { id: 4, title: "DUNE: PART 2", cast: "Cast: Timothée Chalamet, Zendaya ", image: "https://vice-press.com/cdn/shop/files/dune-part-two-movie-poster-matt-ferguson_ac86f8c9-f410-450c-805b-c4352aac4a55_540x.jpg?v=1730814717" },
  { id: 5, title: "OPPENHEIMER", cast: "Cast: Cillian Murphy, Florence Pugh ", image: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000" },
  { id: 6, title: "SMILE", cast: "Cast: Sosie Bacon, Kyle Gallner ", image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeda_6408f76710a9935109f855d4_smile-min.png" },
  { id: 7, title: "WONDER WOMAN", cast: "Cast: Gal Gadot, Chris Pine ", image: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false" },
  { id: 8, title: "CAPTAIN AMERICA: THE WINTER SOLDIER",cast: "Cast: Chris Evans, Sebastian Stan", image: "https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg" },
];

const MovieListSection: React.FC = () => {
  const navigate = useNavigate();

  const handleMovieClick = (id: number) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="px-8 py-10">
      <h2 className="text-3xl font-bold mb-6">
        Popular on <span className='gradient-text'>Movie Haven</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative group movie-card-bg text-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer mb-4"
            onClick={() => handleMovieClick(movie.id)}
          >
            <div className='movie-card-photo w-full p-1 flex justify-center rounded-md'>
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-[350px] object-cover rounded-md" 
              />
            </div>


            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col mx-3 items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <h2 className="text-2x1 font-semibold text-white">
                {movie.title}
                </h2>
              <p className="text-xs text-gray-300 mt-1">
                {movie.cast}
                </p>
            </div>
          </div>
        ))}
      </div>


      <div className='mt-4'>
        <Footer />
      </div>
    </div>
  );
};

export default MovieListSection;
