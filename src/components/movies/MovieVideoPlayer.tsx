import React, { useRef, useState } from "react";

import PlayPauseButton from './moviePlayerTemplates/PlayPauseButton';
import MuteButton from './moviePlayerTemplates/MuteButton';
import FullscreenButton from './moviePlayerTemplates/FullScreenButton';

interface MovieVideoPlayerProps {
    src: string;
}

const MovieVideoPlayer: React.FC<{ src: string }> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
          if (isPlaying) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
    if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    }
    };

    const enterFullScreen = () => {
    if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
        }
    }
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            <video
                ref={videoRef}
                src={src}
                className="w-full rounded-lg shadow-lg"
                controls={false}
            />
        
            {/* Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 p-3 rounded-lg">
                <PlayPauseButton isPlaying={isPlaying} onClick={togglePlay} />
                <MuteButton isMuted={isMuted} onClick={toggleMute} />
                <FullscreenButton onClick={enterFullScreen} />
            </div>
        </div>
    );
};

export default MovieVideoPlayer;
