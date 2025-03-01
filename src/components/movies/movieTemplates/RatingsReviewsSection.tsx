import React from 'react';

interface RatingsReviewsSectionProps {
    average_rating: number;
}

const RatingsReviewsSection: React.FC<RatingsReviewsSectionProps> = ({ average_rating }) => (
    <>
        <h2 className="text-2xl font-bold mt-6 text-center">Ratings & Reviews</h2>
        <div className="text-center mt-4 border-t-2 border-orange-700 pt-3 rounded">
            <p className="text-yellow-400 text-xl">{'⭐'.repeat(Math.round(average_rating))}</p>
            <p className="text-sm text-gray-400">Average Rating: {average_rating} / 10</p>
        </div>
    </>
);

export default RatingsReviewsSection;