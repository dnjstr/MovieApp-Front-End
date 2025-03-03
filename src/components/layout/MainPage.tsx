import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../hooks/ForMovies/useMainPageMovies";
import MovieSlider from "./MainPageTemplates/MovieSlider";

const MainPage: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const { data: slides = [], isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  useEffect(() => {
    if (slides.length > 0) {
      setCurrentVideo(slides[0].video);
    }
  }, [slides]);

  if (isLoading) {
    return <div className="text-white text-center my-[440px]">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-500 text-center my-[440px]">Error loading movies.</div>;
  }

  return (
    <div className="relative h-screen w-full flex flex-col items-start justify-center text-white text-left z-0">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full">
        {currentVideo && (
          <video
            key={currentVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={currentVideo} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Swiper Component */}
      <div className="relative z-10 w-full h-full flex items-center">
        <MovieSlider slides={slides} setCurrentVideo={setCurrentVideo} />
      </div>
    </div>
  );
};

export default MainPage;
