import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = "" }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="group inline-block">
        <button
            onClick={handleGoBack}
            className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-b from-orange-600 to-orange-900 text-white group-hover:from-orange-700 group-hover:to-orange-950 rounded transition duration-300 shadow-md mb-4 ${className}`}
        >
            <FaArrowLeft /> Back
        </button>
    </div>
  );
};

export default BackButton;