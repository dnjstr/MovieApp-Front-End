import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

interface PlayPauseButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ isPlaying, onClick }) => (
  <button onClick={onClick} className="text-white text-xl">
    {isPlaying ? <FaPause /> : <FaPlay />}
  </button>
);

export default PlayPauseButton;
