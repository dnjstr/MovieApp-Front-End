import React from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

interface MuteButtonProps {
  isMuted: boolean;
  onClick: () => void;
}

const MuteButton: React.FC<MuteButtonProps> = ({ isMuted, onClick }) => (
  <button onClick={onClick} className="text-white text-xl">
    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
  </button>
);

export default MuteButton;
