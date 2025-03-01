import React from 'react';
import { FaExpand } from 'react-icons/fa';

interface FullscreenButtonProps {
  onClick: () => void;
}

const FullscreenButton: React.FC<FullscreenButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className="text-white text-xl">
    <FaExpand />
  </button>
);

export default FullscreenButton;
