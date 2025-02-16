import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBookmark, FaRegBookmark, FaTrash } from 'react-icons/fa';


const movies = [
    {
        id: 1,
        title: "BATMAN (2022)",
        description: "A dark, gritty take on the superhero where a young Bruce Wayne, in his second year as Batman, investigates a series of brutal murders by the enigmatic Riddler, uncovering deep corruption within Gotham City's elite, forcing him to confront his own family's secrets while forging new alliances to bring the city's criminals to justice.",
        image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
        cast: [
            { name: "Robert Pattinson", role: "Batman", image: "https://m.media-amazon.com/images/M/MV5BNzk0MDQ5OTUxMV5BMl5BanBnXkFtZTcwMDM5ODk5Mg@@._V1_FMjpg_UX1000_.jpg" },
            { name: "Zoe Kravitz", role: "Catwoman", image: "https://imgix.bustle.com/uploads/getty/2025/1/29/89045022/new-york-new-york.jpg?w=248&h=372&fit=crop&crop=faces&dpr=2" }
        ],
        reviews: [
            { source: "New York Times", review: "A deeply intense, outright gritty take...", rating: 5 },
            { source: "Film.com", review: "The work doesn't disappoint...", rating: 4 }
        ]
    },
    {
        id: 2,
        title: "SHADOW AND BONE",
        description: "A young adult fantasy novel by Leigh Bardugo, following Alina Starkov, an orphaned mapmaker who discovers she possesses a rare magical ability that could potentially save her war-torn country from a dangerous, monstrous realm called the Shadow Fold, forcing her into a world of political intrigue and powerful forces as she learns to control her newfound power.",
        image: "https://m.media-amazon.com/images/M/MV5BZWM1NTJiNzUtYTJlYy00NWYyLTliNjUtN2FjNzdkOWQxNWRjXkEyXkFqcGc@._V1_.jpg",
        cast: [
            { name: "Jessie Mei Li", role: "Alina Starkov", image: "https://ntvb.tmsimg.com/assets/assets/1597259_v9_aa.jpg" },
            { name: "Ben Barnes", role: "General Kirigan", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/510380_v9_bb.jpg" }
        ],
        reviews: [
            { source: "Rotten Tomatoes", review: "A gripping fantasy adventure...", rating: 4 },
            { source: "IGN", review: "A well-executed adaptation...", rating: 5 }
        ]
    },
    {
        id: 3,
        title: "US",
        description: "At night, four strangers break into Adelaide's childhood home. The family is shocked to find out that the intruders look like them. A vacationing family and the traumatized mother visit where the mother was attacked on vacation years before, on the same boardwalk, the same year the movie Lost Boys was filmed.",
        image: "https://i.ebayimg.com/images/g/FKsAAOSw8DZgGo2i/s-l1200.jpg",
        cast: [
            { name: "Lupita Nyong'o", role: "Adelaide Wilson", image: "https://m.media-amazon.com/images/M/MV5BMTY0NTQ4MDY2Nl5BMl5BanBnXkFtZTgwNDk1MTEyMDE@._V1_.jpg" },
            { name: "Winston Duke", role: "Gabe Wilson", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2duyORVbVNsv57ZdhWbIaKjKs24twoK-yEA&s" }
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
            { name: "Timothée Chalamet", role: "Paul Atreides", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQNZq0LflnBBVwN_OFGfL0YT2BKHrnofxfQ&s" },
            { name: "Zendaya", role: "Chani", image: "https://cdn.britannica.com/23/264823-050-A938FF2D/zendaya-attends-96th-annual-academy-awards-march-10-2024-hollywood-california-actress-acting.jpg?w=400&h=300&c=crop" }
        ],
        reviews: [
            { source: "Rotten Tomatoes", review: "All the hype and great things I’ve heard about this film are all true!", rating: 4 },
            { source: "Flick Filosopher", review: "This is what all movies should aspire to be, and yes, I can say that for many other great movies but I believe this is one of, if not the best example of art in movie form as it presents a good story, great action and phenomenal acting from actors such as Timothee Chalamet and Zendaya. ", rating: 4 }
        ]
    },
    {
        id: 5,
        title: "OPPENHEIMER",
        description: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
        image: "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
        cast: [
            { name: "Cillian Murphy", role: "J. Robert Oppenheimer", image: "https://media.gq-magazine.co.uk/photos/671b8991c9fbba3490dbc2fd/1:1/w_2359,h_2359,c_limit/2180805232" },
            { name: "Florence Pugh", role: "Jean Tatlock", image: "https://cdn.britannica.com/20/217320-050-181C95DC/English-actor-Florence-Pugh-2019.jpg" }
        ],
        reviews: [
            { source: "Rotten Tomatoes", review: "A Brilliant Tale of Science, Humanity, and Ethical Dilemmas", rating: 4 },
            { source: "IMDb", review: "It is a must-see for anyone who appreciates the convergence of history, science, and the human spirit on the silver screen.", rating: 3 }
        ]
    },
    {
        id: 6,
        title: "SMILE",
        description: "At a psychiatric ward in Newark, New Jersey, therapist Rose Cotter meets graduate student Laura Weaver, who explains that she recently witnessed her professor kill himself. Laura claims to be terrorized by an invisible Entity that appears as various smiling people and has foretold her death.",
        image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeda_6408f76710a9935109f855d4_smile-min.png",
        cast: [
            { name: "Sosie Bacon", role: "Rose Cotter", image: "https://ntvb.tmsimg.com/assets/assets/489330_v9_bc.jpg" },
            { name: "Kyle Gallner", role: "Joel", image: "https://ntvb.tmsimg.com/assets/assets/264616_v9_bc.jpg" }
        ],
        reviews: [
            { source: "IMDb", review: "Smile is still my overall favorite between the two, and for that this is a must watch for any horror movie lover reading this review. You wont regret seeing this.", rating: 3 },
            { source: "Rotten Tomatoes", review: "Smile is the most shocking movie Ive ever reviewed. It had more surprises than a David Blaine magic show.", rating: 3 }
        ]
    },
    {
        id: 7,
        title: "WONDER WOMAN",
        description: "An accomplished strategist and tactician, leader, and diplomat. She has been shown to astrally project herself into various lands of myth. In some cases, she has shown the ability to place individuals into a state of sleep while under the power of her golden lasso.",
        image: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
        cast: [
            { name: "Gal Gadot", role: "Wonder Woman", image: "https://m.media-amazon.com/images/M/MV5BNWJmNDNiMzgtOGNlOC00MmU4LThkNjUtNTIxNmQwMzQ4NTczXkEyXkFqcGc@._V1_.jpg" },
            { name: "Chris Pine", role: "Steve Trevor", image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/chris_pine_3.png" }
        ],
        reviews: [
            { source: "Rotten Tomatoes", review: "This film is everything you want in a superhero movie. This is the Wonder Woman movie weve been waiting for. ", rating: 4 },
            { source: "IMDb", review: "Wonder Woman is the first DCEU movie that most people can agree is stellar. It features a good story, great action scenes, and strong performances by its cast, especially Gal Gadot and Chris Pine.", rating: 3 }
        ]
    },
    {
        id: 8,
        title: "CAPTAIN AMERICA: THE WINTER SOLDIER",
        description: "Follows Steve Rogers, aka Captain America, as he struggles to adapt to modern life after being frozen for decades, only to become entangled in a dangerous conspiracy within S.H.I.E.L.D., forcing him to team up with Black Widow and a new ally, the Falcon, to combat a mysterious and lethal assassin known as the Winter Soldier, a highly skilled and seemingly unstoppable enemy with a connection to his past.",
        image: "https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg",
        cast: [
            { name: "Chris Evans", role: "Captain America", image: "https://cdn.britannica.com/28/215028-050-94E9EA1E/American-actor-Chris-Evans-2019.jpg" },
            { name: "Sebastian Stan", role: "Bucky Barnes", image: "https://m.media-amazon.com/images/M/MV5BMWEwYjgxMDQtYmRkOS00MGFiLThjMzMtZGQ2ZjBhMTcyOWNlXkEyXkFqcGc@._V1_.jpg" }
        ],
        reviews: [
            { source: "Rotten Tomatoes", review: "Captain America: The Winter Soldier is an absolute masterpiece and one of the greatest superhero films of all time. This movie redefined what a Marvel film could be, blending action, espionage, and emotional depth into a thrilling experience.", rating: 4 },
            { source: "IMDb", review: "My absolute favourite of the MCU movies. The Winter Soldier is such a cracking 70s style conspiracy story. ", rating: 3 }
        ]
    }
];

const MovieDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const movie = movies.find((movie) => movie.id === parseInt(id || '', 10));

    const [bookmarked, setBookmarked] = useState(false);
    const [reviews, setReviews] = useState(movie?.reviews || []);
    const [newReview, setNewReview] = useState({ source: "", review: "", rating: 0 });

    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
        setBookmarked(storedBookmarks.includes(movie?.id));
    }, [movie]);

    const toggleBookmark = () => {
        let storedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

        if (bookmarked) {
            storedBookmarks = storedBookmarks.filter((movieId: number) => movieId !== movie?.id);
        } else {
            storedBookmarks.push(movie?.id);
        }

        localStorage.setItem('bookmarks', JSON.stringify(storedBookmarks));
        setBookmarked(!bookmarked);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleAddReview = () => {
        if (!newReview.source || !newReview.review || newReview.rating < 1) {
            alert("Please provide all details and a rating of at least 1 star.");
            return;
        }

        const updatedReviews = [...reviews, newReview];
        setReviews(updatedReviews);
        setNewReview({ source: "", review: "", rating: 0 });
    };

    const handleDeleteReview = (index: number) => {
        const updatedReviews = reviews.filter((_, i) => i !== index);
        setReviews(updatedReviews);
    };

    if (!movie) {
        return <div className="text-white text-center mt-10">Movie not found.</div>;
    }

    return (
        <div className="relative text-white bg-black min-h-screen flex flex-col items-start">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${movie.image})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>

            <div className="relative z-10 p-8 w-full max-w-full">
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => (window.history.length > 2 ? navigate(-1) : navigate('/'))}
                        className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-900 transition duration-300 mt-8 shadow-md"
                    >
                        <FaArrowLeft /> Back
                    </button>

                    <button
                        onClick={toggleBookmark}
                        className="text-orange-500 hover:text-orange-700 transition duration-300 text-3xl"
                    >
                        {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                </div>

                {/* Movie Details Section */}
                <div className="flex flex-col md:flex-row items-center mt-6">
                    <img src={movie.image} alt={movie.title} className="w-80 h-96 object-cover rounded-md shadow-lg border border-gray-700" />
                    <div className="md:ml-8 text-center md:text-left">
                        <h1 className="text-4xl font-bold">{movie.title}</h1>
                        <p className="text-lg mt-2 text-gray-300">{movie.description}</p>
                    </div>
                </div> 

                {/* Cast Section */}
                {movie.cast && (
                    <>
                        <h2 className="text-2xl font-bold mt-6 text-center border-b border-orange-600 pb-2">Cast</h2>
                        <div className="flex overflow-x-auto space-x-4 mt-4 justify-center">
                            {movie.cast.map((actor) => (
                                <div key={actor.name} className="flex flex-col items-center">
                                    <img src={actor.image} alt={actor.name} className="w-16 h-16 rounded-full border border-gray-500 shadow-md" />
                                    <p className="text-sm font-medium">{actor.name}</p>
                                    <p className="text-xs opacity-70">{actor.role}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Reviews Section */}
                {reviews.length > 0 && (
                    <>
                        <h2 className="text-2xl font-bold mt-6 text-center border-b border-orange-600 pb-2">Ratings & Reviews</h2>
                        <div className="space-y-4 mt-4">
                            {reviews.map((review, index) => (
                                <div key={index} className="border-l-4 border-orange-600 pl-4 bg-black/40 p-3 rounded-md shadow-md flex justify-between items-center">
                                    <div>
                                        <p className="text-lg font-semibold text-orange-400">{review.source}</p>
                                        <p className="text-sm italic text-gray-300">"{review.review}"</p>
                                        <p className="text-yellow-400">{'⭐'.repeat(review.rating)}</p>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteReview(index)}
                                        className="text-red-500 hover:text-red-700 transition duration-300"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Add Review Form */}
                <div className="mt-6 p-4 bg-black/50 rounded-md shadow-md">
                    <h2 className="text-xl font-bold text-center">Add Your Review</h2>
                    <input
                        type="text"
                        name="source"
                        value={newReview.source}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full p-2 mt-2 rounded bg-gray-800 text-white border border-gray-600"
                    />
                    <textarea
                        name="review"
                        value={newReview.review}
                        onChange={handleInputChange}
                        placeholder="Write your review..."
                        className="w-full p-2 mt-2 rounded bg-gray-800 text-white border border-gray-600"
                    />
                    <input
                        type="number"
                        name="rating"
                        value={newReview.rating}
                        onChange={handleInputChange}
                        min="1"
                        max="5"
                        placeholder="Rating (1-5)"
                        className="w-full p-2 mt-2 rounded bg-gray-800 text-white border border-gray-600"
                    />
                    <button
                        onClick={handleAddReview}
                        className="mt-3 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-800 transition"
                    >
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    );
}


export default MovieDetail;