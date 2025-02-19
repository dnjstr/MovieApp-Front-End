import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaArrowLeft } from "react-icons/fa";

const MovieVideoPlayer: React.FC<{ src: string }> = ({ src }) => {
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [progress, setProgress] = useState(0);
    const [showControls, setShowControls] = useState(true);

    // Toggle Play/Pause
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

    // Toggle Mute
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Change Volume
    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
            setIsMuted(newVolume === 0);
        }
    };

    // Enter Fullscreen Mode
    const enterFullScreen = () => {
        if (videoRef.current?.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    // Handle Progress Update
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress =
                (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    // Seek Video Position
    const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            const newTime =
                (parseFloat(event.target.value) / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
            setProgress(parseFloat(event.target.value));
        }
    };

    // Auto-hide controls after inactivity
    useEffect(() => {
        const hideControls = setTimeout(() => {
            setShowControls(false);
        }, 3000);

        return () => clearTimeout(hideControls);
    }, [showControls]);

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case " ":
                    event.preventDefault();
                    togglePlay();
                    break;
                case "m":
                    toggleMute();
                    break;
                case "f":
                    enterFullScreen();
                    break;
                default:
                    break;
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isPlaying, isMuted]);

    return (
        <div 
            className="relative w-full max-w-3xl mx-auto mt-10"
            onMouseMove={() => setShowControls(true)}
        >
            {/* Back Button */}
            <button 
                onClick={() => navigate(-1)} 
                className="absolute top-4 left-4 bg-orange-600/50 text-white p-2 rounded-full hover:bg-red-800/70 transition duration-300 z-10"
            >
                <FaArrowLeft className="text-xl" />
            </button>

            {/* Video Player */}
            <video
                ref={videoRef}
                src={src}
                className="w-full rounded-lg shadow-lg"
                controls={false}
                onTimeUpdate={handleTimeUpdate}
            />

            {/* Video Controls */}
            {showControls && (
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 p-3 rounded-lg transition-opacity duration-300">
                    {/* Play/Pause Button */}
                    <button onClick={togglePlay} className="text-white text-xl">
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>

                    {/* Progress Bar */}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSeek}
                        className="w-1/2 mx-2 cursor-pointer"
                    />

                    {/* Volume Control */}
                    <div className="flex items-center">
                        <button onClick={toggleMute} className="text-white text-xl">
                            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                        </button>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="ml-2 w-16 cursor-pointer"
                        />
                    </div>

                    {/* Fullscreen Button */}
                    <button onClick={enterFullScreen} className="text-white text-xl">
                        <FaExpand />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MovieVideoPlayer;
