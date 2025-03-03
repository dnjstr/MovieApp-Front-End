import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { PlayPauseButtonProps } from '../../../types/types';

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ isPlaying, onClick }) => (
  <button onClick={onClick} className="text-white text-xl">
    {isPlaying ? <FaPause /> : <FaPlay />}
  </button>
);

export default PlayPauseButton;
