import React from 'react';
import { FaExpand } from 'react-icons/fa';
import { FullscreenButtonProps } from '../../../types/types';

const FullscreenButton: React.FC<FullscreenButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className="text-white text-xl">
    <FaExpand />
  </button>
);

export default FullscreenButton;
