import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBookmark } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import MoviePlayer from './MoviePlayer';

interface Review {
    id: number;
    user: {
        fullName: string;
    };
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
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);


    useEffect(() => {
        // Fetch movie details
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

        fetch(`http://127.0.0.1:8000/api/movie/${id}/reviews/`)
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));

        const checkBookmark = async () => {
            if (isAuthenticated) {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/api/bookmarks/?t=${new Date().getTime()}`, {
                        headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                const bookmarks = await response.json();
                const isMovieBookmarked = bookmarks.some(
                    (bookmark: any) => bookmark.movie_id === parseInt(id!, 10)
                );
                setIsBookmarked(isMovieBookmarked);
                } catch (error) {
                console.error("Error fetching bookmarks:", error);
                }
            }
        };          

        checkBookmark();
    }, [id, isAuthenticated, token]);

    const isReleased = movie ? new Date(movie.release_date) <= new Date() : false;

    const toggleBookmark = async () => {
        if (!isAuthenticated) {
            alert("Please sign in to bookmark movies.");
            return;
        }

        try {
            let url = '';
            let method = '';

            if (isBookmarked) {
                url = `http://127.0.0.1:8000/api/bookmarks/remove/${movie.id}/`;
                method = 'DELETE';
            } else {
                url = `http://127.0.0.1:8000/api/bookmarks/add/${movie.id}/`;
                method = 'POST';
            }

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            });

            if (response.ok) {
                setIsBookmarked(!isBookmarked);
            } else {
                const data = await response.json();
                console.error("Failed to update bookmark:", data);
            }
        } catch (error) {
            console.error("Error updating bookmark:", error);
        }
    };

    const handleReviewSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isAuthenticated) {
            setShowSignInMessage(true);
            setTimeout(() => setShowSignInMessage(false), 3000);
            return;
        }

        if (!isReleased) {
            alert("Reviews can only be added to released movies.");
            return;
        }

        setIsButtonDisabled(true);

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
                setReviews([...reviews, data]);
                setNewReview({ rating: 0, review_text: '' });
                
                const movieResponse = await fetch(`http://127.0.0.1:8000/api/movie/${id}/`);
                const movieData = await movieResponse.json();
                setMovie(movieData);
            } else {
                console.error("Server error:", data);
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        } finally {
            setIsButtonDisabled(false);
            setShowReviewForm(false);
        }
    };

    const handleWatchNow = () => {
        if (movie && movie.video_url) {
            setIsPlayerOpen(true);
        } else {
            alert("Video URL is not available.");
        }
    };

    const closePlayer = () => {
        setIsPlayerOpen(false);
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
            <div className="relative z-10 mt-3">
                {/* Movie details section */}
                <div className="p-8 w-full max-w-full">
                    <button
                        onClick={() => (window.history.length > 2 ? navigate(-1) : navigate('/'))}
                        className="flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-b from-orange-600 to-orange-900 text-white rounded hover:bg-orange-900 transition duration-300 mt-8 shadow-md"
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
                            <div className='flex gap-4 justify-between md:justify-start'>
                                <button
                                    onClick={toggleBookmark}
                                    className={`bookmark-btn-hover mt-4 px-4 py-2 rounded  flex items-center gap-2 ${isAuthenticated ? 'bg-gradient-to-b from-orange-600 to-orange-900 text-white' : 'bg-gray-600 text-white cursor-not-allowed'}`}
                                    disabled={!isAuthenticated}
                                >
                                    <FaBookmark /> {isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
                                </button>
                                <button
                                    onClick={isReleased ? handleWatchNow : undefined}
                                        className={`mt-4 px-4 py-2 rounded transition duration-300 ${
                                            isReleased 
                                                ? 'bg-gradient-to-b from-green-600 to-green-900 text-white' 
                                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                            }`}
                                            disabled={!isReleased}
                                >
                                {isReleased ? "Watch Now" : "Coming Soon"}
                                </button>
                            </div>
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

                    <h2 className="text-2xl font-bold mt-6 text-center">Ratings & Reviews</h2>
                    <div className="text-center mt-4 border-t-2 border-orange-700 pt-3 rounded">
                        <p className="text-yellow-400 text-xl">{'⭐'.repeat(Math.round(movie.average_rating))}</p>
                        <p className="text-sm text-gray-400">Average Rating: {movie.average_rating} / 10</p>
                    </div>
                </div> 
                    
                    {/* Video player */}
                    {isPlayerOpen && (
                        <MoviePlayer
                            videoUrl={movie.video_url}
                            onClose={closePlayer}
                        />
                    )}

                {/* Reviews section */}
                <div className="max-w-4xl mx-auto mt-8 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Reviews</h2>
                        {isReleased ? (
                            <button
                                onClick={() => {
                                    setShowReviewForm(true);
                                    setIsButtonDisabled(true); 
                                }}
                                className={`px-4 py-2 rounded-md ${
                                    isAuthenticated && !isButtonDisabled
                                        ? 'bg-gradient-to-b from-orange-600 to-orange-900' 
                                        : 'bg-gray-600 cursor-not-allowed'
                                }`}
                                disabled={!isAuthenticated || isButtonDisabled}
                            >
                                Add Review
                            </button>
                        ) : (
                            <span className="text-gray-400">Coming Soon - Reviews Unavailable</span>
                        )}
                    </div>

                    {showReviewForm && isReleased && (
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
                                    className="px-4 py-2 bg-gradient-to-b from-orange-600 to-orange-900 rounded"
                                >
                                    Submit Review
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowReviewForm(false);
                                        setNewReview({ rating: 0, review_text: '' });
                                        setIsButtonDisabled(false);
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
};

export default MovieDetail;


