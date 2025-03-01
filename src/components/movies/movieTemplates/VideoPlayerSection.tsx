import React from 'react';
import MoviePlayer from '../MoviePlayer';

interface VideoPlayerSectionProps {
    isPlayerOpen: boolean;
    videoUrl: string;
    closePlayer: () => void;
}

const VideoPlayerSection: React.FC<VideoPlayerSectionProps> = ({ isPlayerOpen, videoUrl, closePlayer }) => (
    isPlayerOpen && (
        <MoviePlayer
            videoUrl={videoUrl}
            onClose={closePlayer}
        />
    )
);

export default VideoPlayerSection;
