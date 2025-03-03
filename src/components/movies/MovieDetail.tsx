import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axiosInstance from '../../api/axiosInstance';
import useMovieDetails from '../../hooks/ForMovies/useMovieDetails';
import useMovieReviews from '../../hooks/ForMovies/useMovieReview';
import useBookmarkStatus from '../../hooks/useBookmarkStatus';

import BackgroundLayers from './movieTemplates/BackgroundLayers';
import ContentContainer from './movieTemplates/ContentContainer';
import MovieDetailsSection from './movieTemplates/MovieDetailsSection';
import MainCastSection from './movieTemplates/MainCastSection';
import RatingsReviewsSection from './movieTemplates/RatingsReviewsSection';
import ReviewsSection from './movieTemplates/ReviewsSection';
import VideoPlayerSection from './movieTemplates/VideoPlayerSection'

const MovieDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { isAuthenticated, token } = useAuth();

    if (!id) {
        return <div>Error: Movie ID is missing</div>;
    }

    const { movie, setMovie, loading, error } = useMovieDetails(id!);
    const { reviews, setReviews } = useMovieReviews(id!);
    const { isBookmarked, setIsBookmarked } = useBookmarkStatus(id, isAuthenticated, token);

    const [newReview, setNewReview] = useState({
        rating: 0,
        review_text: ''
    });
    const [showSignInMessage, setShowSignInMessage] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const isReleased = movie ? new Date(movie.release_date) <= new Date() : false;

    const toggleBookmark = async () => {
        if (!isAuthenticated) {
            alert("Please sign in to bookmark movies.");
            return;
        }

        try {
            let url = '';
            let method: 'post' | 'delete';
            if (isBookmarked) {
                url = `/bookmarks/remove/${movie.id}/`;
                method = 'delete';
            } else {
                url = `/bookmarks/add/${movie.id}/`;
                method = 'post';
            }

            const response = await axiosInstance.request({
                url: url,
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            });

            if (response.status >= 200 && response.status < 300) {
                setIsBookmarked(!isBookmarked);
            } else {
                console.error("Failed to update bookmark:", response.data);
            }
        } catch (err) {
            console.error("Error updating bookmark:", err);
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
            const response = await axiosInstance.post(`/movie/${id}/reviews/add/`, newReview, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            });

            if (response.status >= 200 && response.status < 300) {
                setReviews([...reviews, response.data]);
                setNewReview({ rating: 0, review_text: '' });

                const movieResponse = await axiosInstance.get(`/movie/${id}/`);
                setMovie(movieResponse.data);
            } else {
                console.error("Server error:", response.data);
            }
        } catch (err) {
            console.error('Error submitting review:', err);
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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="relative text-white bg-black min-h-screen">
            <BackgroundLayers image={movie.poster_image} />
            <ContentContainer>
                <MovieDetailsSection
                    movie={movie}
                    isAuthenticated={isAuthenticated}
                    isBookmarked={isBookmarked}
                    toggleBookmark={toggleBookmark}
                    handleWatchNow={handleWatchNow}
                    isReleased={isReleased}
                    navigate={navigate}
                />
                {movie.main_cast && <MainCastSection main_cast={movie.main_cast} />}
                <RatingsReviewsSection average_rating={movie.average_rating} />
                <ReviewsSection
                    reviews={reviews}
                    newReview={newReview}
                    setNewReview={setNewReview}
                    handleReviewSubmit={handleReviewSubmit}
                    showReviewForm={showReviewForm}
                    setShowReviewForm={setShowReviewForm}
                    setIsButtonDisabled={setIsButtonDisabled}
                    isAuthenticated={isAuthenticated}
                    isReleased={isReleased}
                    showSignInMessage={showSignInMessage}
                    isButtonDisabled={isButtonDisabled}
                />
                <VideoPlayerSection
                    isPlayerOpen={isPlayerOpen}
                    videoUrl={movie.video_url}
                    closePlayer={closePlayer}
                />
            </ContentContainer>
        </div>
    );
};

export default MovieDetail;
