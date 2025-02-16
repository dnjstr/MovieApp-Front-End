import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

interface Review {
    id: number;
    user: {
        fullName: string;
    }
    // user: string;
    rating: number;
    review_text: string;
    created_at: string;
}

const MovieDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { isAuthenticated, token } = useAuth();
    const [movie, setMovie] = useState<any>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [newReview, setNewReview] = useState({
        rating: 0,
        review_text: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showSignInMessage, setShowSignInMessage] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/movie/${id}/`)
            .then(response => response.json())
            .then(data => {
                setMovie(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });

        // Fetch reviews
        fetch(`http://127.0.0.1:8000/api/movie/${id}/reviews/`)
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, [id]);

    const handleReviewSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isAuthenticated) {
            setShowSignInMessage(true);
            setTimeout(() => setShowSignInMessage(false), 3000);
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/movie/${id}/reviews/add/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(newReview)
            });
            
            const data = await response.json();
            if (response.ok) {
                // const data = await response.json();
                setReviews([...reviews, data]);
                setNewReview({ rating: 0, review_text: '' });
                
                // Refresh movie details to get updated average rating
                const movieResponse = await fetch(`http://127.0.0.1:8000/api/movie/${id}/`);
                const movieData = await movieResponse.json();
                setMovie(movieData);
            } else {
                console.error("Server error:", data);
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    if (loading) {
        return <div className="text-white text-center mt-10">Loading...</div>;
    }

    if (error || !movie) {
        return <div className="text-white text-center mt-10">{error || 'Movie not found.'}</div>;
    }

    return (
        <div className="relative text-white bg-black min-h-screen">
            {/* Background layers */}
            <div className="fixed inset-0 bg-cover bg-center opacity-50" 
                style={{ backgroundImage: `url(${movie.poster_image})` }}>
            </div>
            <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>

            {/* Content container */}
            <div className="relative z-10">
                {/* Movie details section */}
                <div className="p-8 w-full max-w-full">
                    <button
                        onClick={() => (window.history.length > 2 ? navigate(-1) : navigate('/'))}
                        className="flex items-center gap-2 mb-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-900 transition duration-300 mt-8 shadow-md"
                    >
                        <FaArrowLeft /> Back
                    </button>

                    <div className="flex flex-col md:flex-row items-center">
                        <img src={movie.poster_image} alt={movie.title} className="w-80 h-96 object-cover rounded-md shadow-lg border border-gray-700" />
                        <div className="md:ml-8 text-center md:text-left">
                            <h1 className="text-4xl font-bold">{movie.title}</h1>
                            <p className="text-lg mt-2 text-gray-300">{movie.description}</p>
                            <p className="text-sm text-gray-400 mt-2">Release Date: {movie.release_date}</p>
                            <p className="text-sm text-gray-400">Duration: {movie.duration}</p>
                            <p className="text-sm text-gray-400">Genre: {movie.genre}</p>
                            <p className="text-sm text-gray-400">Director: {movie.director}</p>
                        </div>
                    </div>

                    {movie.main_cast && (
                        <>
                            <h2 className="text-2xl font-bold mt-6 text-center border-b border-orange-600 pb-2">Main Cast</h2>
                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                {movie.main_cast.split(',').map((actor: string, index: number) => (
                                    <span key={index} className="main-cast-bg px-3 py-1 text-white rounded-md shadow-md">
                                        {actor.trim()}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}

                    <h2 className="text-2xl font-bold mt-6 text-center border-b border-orange-600 pb-2">Ratings & Reviews</h2>
                    <div className="text-center mt-4">
                        <p className="text-yellow-400 text-xl">{'⭐'.repeat(Math.round(movie.average_rating))}</p>
                        <p className="text-sm text-gray-400">Average Rating: {movie.average_rating} / 10</p>
                    </div>
                </div> 

                {/* Reviews section */}
                <div className="max-w-4xl mx-auto mt-8 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Reviews</h2>
                        <button
                            onClick={() => setShowReviewForm(true)}
                            className={`px-4 py-2 rounded-md ${
                                isAuthenticated 
                                    ? 'bg-orange-600 hover:bg-orange-700' 
                                    : 'bg-gray-600 cursor-not-allowed'
                            }`}
                            disabled={!isAuthenticated}
                        >
                            Add Review
                        </button>
                    </div>

                    {showReviewForm && (
                        <form onSubmit={handleReviewSubmit} className="mb-8 bg-gray-900 p-6 rounded-lg">
                            <div className="mb-4">
                                <label className="block mb-2">Rating (1-10)</label>
                                <div className="flex gap-2">
                                    {[...Array(10)].map((_, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => setNewReview({ ...newReview, rating: index + 1 })}
                                            className={`text-2xl ${index < newReview.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <textarea
                                    value={newReview.review_text}
                                    onChange={(e) => setNewReview({ ...newReview, review_text: e.target.value })}
                                    placeholder="Write your review..."
                                    className="w-full p-2 bg-gray-800 rounded text-white"
                                    rows={4}
                                />
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded"
                                >
                                    Submit Review
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowReviewForm(false);
                                        setNewReview({ rating: 0, review_text: '' });
                                    }}
                                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}

                    {showSignInMessage && (
                        <div className="bg-red-600 text-white p-4 rounded mb-4">
                            Please sign in to submit a review
                        </div>
                    )}

                    {/* Reviews List */}
                    <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
                    {reviews.length === 0 ? (
                        <p className="text-gray-400">No reviews yet. Be the first to review!</p>
                    ) : (
                        <div className="space-y-4">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-gray-800 p-4 rounded">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold">{review.user.fullName}</span>
                                        <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
                                    </div>
                                    <p className="text-gray-300">{review.review_text}</p>
                                    <span className="text-sm text-gray-400">
                                        {new Date(review.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default MovieDetail;
