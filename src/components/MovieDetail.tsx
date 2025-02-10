import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const movies = [
    {
        id: 1,
        title: "BATMAN (2022)",
        description: "A dark, gritty take on the superhero...",
        image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
        cast: [
            { name: "Robert Pattinson", role: "Batman", image: "https://example.com/pattinson.jpg" },
            { name: "Zoe Kravitz", role: "Catwoman", image: "https://example.com/kravitz.jpg" }
        ],
        reviews: [
            { source: "New York Times", review: "A deeply intense, outright gritty take...", rating: 5 },
            { source: "Film.com", review: "The work doesn't disappoint...", rating: 4 }
        ]
    },
    {
        id: 2,
        title: "SHADOW AND BONE",
        description: "A young adult fantasy novel...",
        image: "https://m.media-amazon.com/images/M/MV5BZWM1NTJiNzUtYTJlYy00NWYyLTliNjUtN2FjNzdkOWQxNWRjXkEyXkFqcGc@._V1_.jpg",
        cast: [
            { name: "Jessie Mei Li", role: "Alina Starkov", image: "https://example.com/jessie.jpg" },
            { name: "Ben Barnes", role: "General Kirigan", image: "https://example.com/ben.jpg" }
        ],
        reviews: [
            { source: "Rotten Tomatoes", review: "A gripping fantasy adventure...", rating: 4 },
            { source: "IGN", review: "A well-executed adaptation...", rating: 5 }
        ]
    },
    {
        id: 3,
        title: "US",
        description: "A horror thriller directed by Jordan Peele...",
        image: "https://i.ebayimg.com/images/g/FKsAAOSw8DZgGo2i/s-l1200.jpg",
        cast: [
            { name: "Lupita Nyong'o", role: "Adelaide Wilson", image: "https://example.com/lupita.jpg" },
            { name: "Winston Duke", role: "Gabe Wilson", image: "https://example.com/winston.jpg" }
        ],
        reviews: [
            { source: "Hollywood Reporter", review: "A mind-bending thriller...", rating: 5 },
            { source: "The Guardian", review: "Terrifying and thought-provoking...", rating: 4 }
        ]
    },
    {
        id: 4,
        title: "DUNE: PART 2",
        description: "Set in the distant future in a feudal interstellar society, descended from terrestrial humans, in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis.",
        image: "https://vice-press.com/cdn/shop/files/dune-part-two-movie-poster-matt-ferguson_ac86f8c9-f410-450c-805b-c4352aac4a55_540x.jpg?v=1730814717",
        cast: [
            { name: "Lupita Nyong'o", role: "Adelaide Wilson", image: "https://example.com/lupita.jpg" },
            { name: "Winston Duke", role: "Gabe Wilson", image: "https://example.com/winston.jpg" }
        ],
        reviews: [
            { source: "Hollywood Reporter", review: "A mind-bending thriller...", rating: 5 },
            { source: "The Guardian", review: "Terrifying and thought-provoking...", rating: 4 }
        ]
    },
    {
        id: 5,
        title: "OPPENHEIMER",
        description: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
        image: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
        cast: [
            { name: "Lupita Nyong'o", role: "Adelaide Wilson", image: "https://example.com/lupita.jpg" },
            { name: "Winston Duke", role: "Gabe Wilson", image: "https://example.com/winston.jpg" }
        ],
        reviews: [
            { source: "Hollywood Reporter", review: "A mind-bending thriller...", rating: 5 },
            { source: "The Guardian", review: "Terrifying and thought-provoking...", rating: 4 }
        ]
    },
    {
        id: 6,
        title: "SMILE",
        description: "At a psychiatric ward in Newark, New Jersey, therapist Rose Cotter meets graduate student Laura Weaver, who explains that she recently witnessed her professor kill himself. Laura claims to be terrorized by an invisible Entity that appears as various smiling people and has foretold her death.",
        image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeda_6408f76710a9935109f855d4_smile-min.png",
        cast: [
            { name: "Lupita Nyong'o", role: "Adelaide Wilson", image: "https://example.com/lupita.jpg" },
            { name: "Winston Duke", role: "Gabe Wilson", image: "https://example.com/winston.jpg" }
        ],
        reviews: [
            { source: "Hollywood Reporter", review: "A mind-bending thriller...", rating: 5 },
            { source: "The Guardian", review: "Terrifying and thought-provoking...", rating: 4 }
        ]
    },
    {
        id: 7,
        title: "WONDER WOMAN",
        description: "An accomplished strategist and tactician, leader, and diplomat. She has been shown to astrally project herself into various lands of myth. In some cases, she has shown the ability to place individuals into a state of sleep while under the power of her golden lasso.",
        image: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
        cast: [
            { name: "Lupita Nyong'o", role: "Adelaide Wilson", image: "https://example.com/lupita.jpg" },
            { name: "Winston Duke", role: "Gabe Wilson", image: "https://example.com/winston.jpg" }
        ],
        reviews: [
            { source: "Hollywood Reporter", review: "A mind-bending thriller...", rating: 5 },
            { source: "The Guardian", review: "Terrifying and thought-provoking...", rating: 4 }
        ]
    },
    {
        id: 8,
        title: "CAPTAIN AMERICA: THE WINTER SOLDIER",
        description: "Follows Steve Rogers, aka Captain America, as he struggles to adapt to modern life after being frozen for decades, only to become entangled in a dangerous conspiracy within S.H.I.E.L.D., forcing him to team up with Black Widow and a new ally, the Falcon, to combat a mysterious and lethal assassin known as the Winter Soldier, a highly skilled and seemingly unstoppable enemy with a connection to his past.",
        image: "https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg",
        cast: [
            { name: "Lupita Nyong'o", role: "Adelaide Wilson", image: "https://example.com/lupita.jpg" },
            { name: "Winston Duke", role: "Gabe Wilson", image: "https://example.com/winston.jpg" }
        ],
        reviews: [
            { source: "Hollywood Reporter", review: "A mind-bending thriller...", rating: 5 },
            { source: "The Guardian", review: "Terrifying and thought-provoking...", rating: 4 }
        ]
    }
];

const MovieDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const movie = movies.find((movie) => movie.id === parseInt(id || '', 10));

    if (!movie) {
        return <div>Movie not found.</div>;
    }

    return (
        <div className="relative text-white bg-black min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${movie.image})` }}></div>
            
            <div className="relative z-10 p-8 max-w-4xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-900 transition duration-300 mt-5"
                >
                    &larr; Back
                </button>
                
                <img src={movie.image} alt={movie.title} className="w-full h-96 object-cover rounded-md shadow-lg" />
                
                <h1 className="text-4xl font-bold mt-4">{movie.title}</h1>
                <p className="text-lg mt-2">{movie.description}</p>
                
                {/* Cast Section */}
                {movie.cast && (
                    <>
                        <h2 className="text-2xl font-bold mt-6">Cast</h2>
                        <div className="flex overflow-x-auto space-x-4 mt-2">
                            {movie.cast.map((actor) => (
                                <div key={actor.name} className="flex flex-col items-center">
                                    <img src={actor.image} alt={actor.name} className="w-16 h-16 rounded-full" />
                                    <p className="text-sm font-medium">{actor.name}</p>
                                    <p className="text-xs opacity-70">{actor.role}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Ratings & Reviews */}
                {movie.reviews && (
                    <>
                        <h2 className="text-2xl font-bold mt-6">Ratings & Reviews</h2>
                        <div className="space-y-4 mt-2">
                            {movie.reviews.map((review, index) => (
                                <div key={index} className="border-l-4 border-orange-600 pl-4">
                                    <p className="text-lg font-semibold">{review.source}</p>
                                    <p className="text-sm italic">"{review.review}"</p>
                                    <p className="text-yellow-400">{'⭐'.repeat(review.rating)}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MovieDetail;
