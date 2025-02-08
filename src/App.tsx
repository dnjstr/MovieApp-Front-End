import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MovieListSection from './components/Movielistsection';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <MovieListSection />
    </div>
  );
};

export default App;