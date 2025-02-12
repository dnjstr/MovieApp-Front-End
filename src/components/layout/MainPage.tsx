import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const slides = [
  { 
    title: "Unlimited movies, TV shows, and more.", 
    subtitle: "Watch anywhere. Cancel anytime.",
    video: "/dune-movie-2021.960x540.mp4"
  },
  { 
    title: "New Blockbusters Every Week!", 
    subtitle: "Stream the latest movies in high quality.",
    video: "/batman-intimidating-legacy.960x540.mp4"
  },
  { 
    title: "Your Favorite Shows, Anytime!", 
    subtitle: "Binge-watch entire seasons with no ads.",
    video: "/mylivewallpapers.com-Oppenheimer.mp4"
  },
  { 
    title: "Coming Soon Movies!", 
    subtitle: "Your most awaited movies is coming.",
    video: "/shield-of-freedom-captain-america.960x540.mp4"
  },
];

const MainPage: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(slides[0]?.video || "");

  return (
    <div className="relative h-screen w-full flex flex-col items-start justify-center text-white text-left px-4">
      
      {/* Background Video */}
      <div className="main-page-video-bg">
        <video
          key={currentVideo} 
          className="absolute top-0 left-0 w-full h-full object-cover rounded-sm"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={currentVideo} type="video/mp4" />
        </video>
      </div>


      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 pl-10 md:pl-20 w-full max-w-3xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full custom-pagination"
          onSlideChange={(swiper) => setCurrentVideo(slides[swiper.realIndex]?.video || "")}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <h1 className="text-4xl text-orange-600 md:text-5xl font-bold max-w-2xl">
                {slide.title}
              </h1>
              <p className="text-lg text-white md:text-xl mt-4">{slide.subtitle}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination"></div>

          <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md text-lg font-semibold transition-all ease-in-out duration-300">
            Get Started
          </button>
        </div>

      </div>
  );
};

export default MainPage;