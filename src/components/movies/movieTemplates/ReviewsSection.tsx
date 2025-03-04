import React from 'react';
import { Review } from '../../../types/types';

interface ReviewsSectionProps {
    reviews: Review[];
    newReview: { rating: number; review_text: string };
    setNewReview: React.Dispatch<React.SetStateAction<{ rating: number; review_text: string }>>;
    handleReviewSubmit: (e: React.FormEvent) => void;
    showReviewForm: boolean;
    setShowReviewForm: React.Dispatch<React.SetStateAction<boolean>>;
    setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    isButtonDisabled: boolean;
    isAuthenticated: boolean;
    isReleased: boolean;
    showSignInMessage: boolean
}
const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, newReview, setNewReview, handleReviewSubmit, showReviewForm, setShowReviewForm, setIsButtonDisabled, isButtonDisabled, isAuthenticated, isReleased, showSignInMessage }) => (
    <div className="max-w-4xl mx-auto mt-8 p-6">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Reviews</h2>
            {isReleased ? (
                <div className="group inline-block">
                    <button
                        onClick={() => {
                            setShowReviewForm(true);
                            setIsButtonDisabled(true);
                        }}
                        className={`px-4 py-2 rounded-md transition duration-300 
                        ${isAuthenticated && !isButtonDisabled 
                            ? 'bg-gradient-to-b from-orange-600 to-orange-900 text-white group-hover:from-orange-700 group-hover:to-orange-950' 
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
                        disabled={!isAuthenticated || isButtonDisabled}
                    >
                        Add Review
                    </button>
                </div>
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
                    <div className='group inline-block'>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gradient-to-b from-orange-600 to-orange-900 text-white group-hover:from-orange-700 group-hover:to-orange-950 rounded"
                        >
                            Submit Review
                        </button>
                    </div>
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
);

export default ReviewsSection;
