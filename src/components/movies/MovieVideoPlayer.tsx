import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from "react-icons/fa";

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
                {/* Play/Pause Button */}
                <button onClick={togglePlay} className="text-white text-xl">
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                {/* Mute/Unmute Button */}
                <button onClick={toggleMute} className="text-white text-xl">
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>

                {/* Fullscreen Button */}
                <button onClick={enterFullScreen} className="text-white text-xl">
                    <FaExpand />
                </button>
            </div>
        </div>
    );
};

export default MovieVideoPlayer;
