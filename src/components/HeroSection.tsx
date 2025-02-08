import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center opacity-50"
      ></div>
      <div className="relative text-center">
        <h1 className="text-5xl font-bold mb-4">Unlimited movies, TV shows, and more.</h1>
        <p className="text-2xl mb-8">Watch anywhere. Cancel anytime.</p>
        <button className="bg-red-600 px-8 py-3 text-xl rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;