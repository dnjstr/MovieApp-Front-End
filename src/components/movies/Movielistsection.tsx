import React from 'react';
import { useNavigate } from 'react-router-dom';

const movies = [
  { id: 1, title: "BATMAN(2022)", description: "A dark, gritty take on the superhero where a young Bruce Wayne, in his second year as Batman, investigates a series of brutal murders by the enigmatic Riddler, uncovering deep corruption within Gotham City's elite, forcing him to confront his own family's secrets while forging new alliances to bring the city's criminals to justice.", cast: "Cast: Robert Pattinson, Zoe Kravitz ", image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png" },
  { id: 2, title: "SHADOW AND BONE", description: "A young adult fantasy novel by Leigh Bardugo, following Alina Starkov, an orphaned mapmaker who discovers she possesses a rare magical ability that could potentially save her war-torn country from a dangerous, monstrous realm called the Shadow Fold, forcing her into a world of political intrigue and powerful forces as she learns to control her newfound power.", cast: "Cast: Jessie Mei Li, Ben Barnes ", image: "https://m.media-amazon.com/images/M/MV5BZWM1NTJiNzUtYTJlYy00NWYyLTliNjUtN2FjNzdkOWQxNWRjXkEyXkFqcGc@._V1_.jpg" },
  { id: 3, title: "US", description: "At night, four strangers break into Adelaide's childhood home. The family is shocked to find out that the intruders look like them. A vacationing family and the traumatized mother visit where the mother was attacked on vacation years before, on the same boardwalk, the same year the movie Lost Boys was filmed.", cast: "Cast: Lupita Nyong'o, Winston Duke ", image: "https://i.ebayimg.com/images/g/FKsAAOSw8DZgGo2i/s-l1200.jpg" },
  { id: 4, title: "DUNE: PART 2", description: "Set in the distant future in a feudal interstellar society, descended from terrestrial humans, in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis.", cast: "Cast: Timothée Chalamet, Zendaya ", image: "https://vice-press.com/cdn/shop/files/dune-part-two-movie-poster-matt-ferguson_ac86f8c9-f410-450c-805b-c4352aac4a55_540x.jpg?v=1730814717" },
  { id: 5, title: "OPPENHEIMER", description: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.", cast: "Cast: Cillian Murphy, Florence Pugh ", image: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000" },
  { id: 6, title: "SMILE", description: "At a psychiatric ward in Newark, New Jersey, therapist Rose Cotter meets graduate student Laura Weaver, who explains that she recently witnessed her professor kill himself. Laura claims to be terrorized by an invisible Entity that appears as various smiling people and has foretold her death.", cast: "Cast: Sosie Bacon, Kyle Gallner ", image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeda_6408f76710a9935109f855d4_smile-min.png" },
  { id: 7, title: "WONDER WOMAN", description: "An accomplished strategist and tactician, leader, and diplomat. She has been shown to astrally project herself into various lands of myth. In some cases, she has shown the ability to place individuals into a state of sleep while under the power of her golden lasso.", cast: "Cast: Gal Gadot, Chris Pine ", image: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false" },
  { id: 8, title: "CAPTAIN AMERICA: THE WINTER SOLDIER", description: "Follows Steve Rogers, aka Captain America, as he struggles to adapt to modern life after being frozen for decades, only to become entangled in a dangerous conspiracy within S.H.I.E.L.D., forcing him to team up with Black Widow and a new ally, the Falcon, to combat a mysterious and lethal assassin known as the Winter Soldier, a highly skilled and seemingly unstoppable enemy with a connection to his past.", cast: "Cast: Chris Evans, Sebastian Stan", image: "https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg" },
];

const MovieListSection: React.FC = () => {
  const navigate = useNavigate();

  const handleMovieClick = (id: number) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="px-8 py-10">
      <h2 className="text-3xl font-bold mb-6">Popular on Movie Haven</h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative movie-card-bg text-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer mb-4"
            onClick={() => handleMovieClick(movie.id)}
          >
            <div className='movie-card-photo w-full p-1 flex justify-center rounded-md'>
              <img src={movie.image} alt={movie.title} className="w-full h-40 object-cover rounded-md" />
            </div>
            <div className='movie-card-info flex flex-col justify-between'>
              <div>
                <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
                <p className="text-sm text-white mb-3 mt-1">{movie.cast}</p>
                <p className="text-xs leading-5 px-1 tracking-normal text-justify opacity-75">{movie.description}</p>
              </div>
            </div>
            <div className='movie-card-overlay'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListSection;
