import React from 'react';

interface ErrorMessageProps {
  onClose: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ onClose }) => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white text-center px-4">
    <div className="flex flex-col items-center gap-4">
      <div className="text-red-500 text-4xl">⚠️</div>
      <p className="text-lg font-medium">Video could not be loaded</p>
      <p className="text-sm text-gray-300 max-w-md">
        The URL provided may be invalid or the video is unavailable.
      </p>
      <button
        onClick={onClose}
        className="mt-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
      >
        Close
      </button>
    </div>
  </div>
);

export default ErrorMessage;
