import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/80">
    <div className="flex flex-col items-center gap-3">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-white"></div>
      <p className="text-white text-sm">Loading video...</p>
    </div>
  </div>
);

export default LoadingSpinner;
