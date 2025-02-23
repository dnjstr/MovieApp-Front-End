import React from 'react';

interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl, size = 'md' }) => {

  const initial = name?.charAt(0)?.toUpperCase() || '?';
  
  const getRandomColor = (str: string) => {
    const colors = [
      'bg-blue-500', 'bg-red-500', 'bg-green-500', 
      'bg-yellow-500', 'bg-purple-500', 'bg-pink-500',
      'bg-indigo-500', 'bg-teal-500'
    ];
    const index = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-xl',
    lg: 'w-16 h-16 text-2xl'
  };

  return (
    <div className={`relative rounded-full overflow-hidden ${sizeClasses[size]}`}>
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={`${getRandomColor(name)} w-full h-full flex items-center justify-center font-semibold text-white`}>
          {initial}
        </div>
      )}
    </div>
  );
};

export default Avatar;