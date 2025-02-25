import React, { useState, useEffect } from 'react';
import { useMoviePlayer } from '../../context/MoviePlayerContext';
// import { X } from 'lucide-react'; 

interface MoviePlayerProps {
  videoUrl: string;
  onClose: () => void;
}

const getVideoId = (url: string): string | null => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
  return url.match(regex)?.[1] ?? null;
};

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
    
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      setIsPlaying(false);
    };
  }, [videoId, onClose]);

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
    
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all duration-200 z-50"
          aria-label="Close video player"
        >
          <X size={24} />
        </button> */}

        <div className="w-full aspect-video relative">
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80">
              <div className="flex flex-col items-center gap-3">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-white"></div>
                <p className="text-white text-sm">Loading video...</p>
              </div>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white text-center px-4">
              <div className="flex flex-col items-center gap-4">
                <div className="text-red-500 text-4xl">⚠️</div>
                <p className="text-lg font-medium">Video could not be loaded</p>
                <p className="text-sm text-gray-300 max-w-md">
                  The URL provided may be invalid or the video is unavailable.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}

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