import React, { useState, useEffect } from 'react';
import { useMoviePlayer } from '../../context/MoviePlayerContext';
import getVideoId from '../../utils/getVideoId';
import useKeydown from '../../hooks/useKeydown';
import LoadingSpinner from './moviePlayerTemplates/LoadingSpinner';
import ErrorMessage from './moviePlayerTemplates/ErrorMessage';

interface MoviePlayerProps {
  videoUrl: string;
  onClose: () => void;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ videoUrl, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoId = getVideoId(videoUrl);
  const { setIsPlaying } = useMoviePlayer();

  useEffect(() => {
    setIsPlaying(true);

    if (!videoId) {
      setHasError(true);
    }

    return () => {
      setIsPlaying(false);
    };
  }, [videoId, setIsPlaying]);
    
  useKeydown('Escape', onClose);


  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-black/50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-5xl w-full mx-4 bg-black rounded-lg overflow-hidden shadow-xl transition-all duration-300 ease-in-out">
        <div className="w-full aspect-video relative">
          {isLoading && !hasError && <LoadingSpinner />}

          {hasError && <ErrorMessage onClose={onClose} />}

          {videoId && !hasError && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              onLoad={() => setIsLoading(false)}
              onError={() => setHasError(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviePlayer;