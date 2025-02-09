import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 fixed w-full bg-black bg-opacity-75 z-50">
      <div className="text-red-600 text-4xl font-bold">JustWatch</div>
      <div className="space-x-4">
        <button className="bg-red-600 px-4 py-2 rounded">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;