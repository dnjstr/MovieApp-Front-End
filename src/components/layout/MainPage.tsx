import React from "react";

const MainPage: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-start justify-center text-white text-left px-4">

      <div className="main-page-video-bg">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/dune-movie-2021.960x540.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      <div className="relative z-10 pl-10 md:pl-20">
        <h1 className="text-4xl text-orange-600 md:text-5xl font-bold max-w-2xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="text-lg text-white md:text-xl mt-4">
          Watch anywhere. Cancel anytime.
        </p>
        <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md text-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MainPage;
