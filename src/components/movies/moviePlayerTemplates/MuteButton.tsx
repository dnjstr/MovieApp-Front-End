import React from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { MuteButtonProps } from '../../../types/types';

const MuteButton: React.FC<MuteButtonProps> = ({ isMuted, onClick }) => (
  <button onClick={onClick} className="text-white text-xl">
    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
  </button>
);

export default MuteButton;
