import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-white text-center px-4">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/jake-the-dog.960x540.mp4" type="video/mp4" />
      </video>

      {/* Overlay (for better text visibility) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl text-orange-600 md:text-5xl font-bold max-w-2xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="text-lg text-white md:text-xl mt-4">Watch anywhere. Cancel anytime.</p>
        <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-black px-6 py-3 rounded-md text-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
