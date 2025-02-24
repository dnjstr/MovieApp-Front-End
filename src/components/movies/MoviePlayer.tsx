import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'; // Close icon
import { motion, AnimatePresence } from 'framer-motion'; // Smooth animations

interface MoviePlayerProps {
  videoUrl: string;
  onClose: () => void;
}

// Function to extract YouTube video ID
const getVideoId = (url: string): string | null => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
  return url.match(regex)?.[1] ?? null;
};

const MoviePlayer: React.FC<MoviePlayerProps> = ({ videoUrl, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoId = getVideoId(videoUrl);

  useEffect(() => {
    if (!videoId) {
      setHasError(true);
    }
  }, [videoId]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          className="relative max-w-5xl w-full mx-4 bg-black rounded-lg overflow-hidden shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-gray-300 transition"
            aria-label="Close video player"
          >
            <X size={28} />
          </button>

          {/* Loading State */}
          {isLoading && !hasError && (
            <div className="flex items-center justify-center h-[500px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="flex items-center justify-center h-[500px] text-white text-center">
              <p className="text-lg">⚠️ Invalid video URL or failed to load.</p>
            </div>
          )}

          {/* Video Player */}
          {videoId && !hasError && (
            <div className="w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                onLoad={() => setIsLoading(false)}
                onError={() => setHasError(true)}
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MoviePlayer;
