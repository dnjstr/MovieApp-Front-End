import React from 'react';

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = "" }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button
      className={`bg-orange-600 border border-gray-900 text-white py-2 px-4 rounded-md hover:bg-orange-800 mb-8 ${className}`}
      onClick={handleGoBack}
    >
      Back
    </button>
  );
};

export default BackButton;