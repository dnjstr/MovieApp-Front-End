import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const [slides, setSlides] = useState<any[]>([]);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/")
      .then((response) => response.json())
      .then((data) => {
        setSlides(data);
        if (data.length > 0) {
          setCurrentVideo(data[0].video);
        }
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const duplicatedSlides = slides.length > 1 ? slides : [...slides, ...slides];

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

      {/* Swiper Container */}
      <div className="relative z-10 w-full h-full flex items-center">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop={slides.length > 1} 
          className="w-full h-full"
          onSlideChange={(swiper) =>
            setCurrentVideo(slides[swiper.realIndex]?.video || null)
          }
        >
          {duplicatedSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col justify-center items-start w-full h-screen px-20 rounded-sm"
                style={{
                  backgroundImage: `url(${slide.poster_image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              >
                <div className="swiper-container-overlay"></div>
                <h1 className="z-20 mb-1 text-5xl text-orange-600 w-6/12 break-words font-bold">
                  {slide.title}
                </h1>
                <p className="z-20 mt-4 pe-5 text-sm hidden txtlg:block w-6/12 text-gray-300">
                  {slide.description}
                </p>

                {new Date(slide.release_date) <= new Date() ? (
                  <button
                    onClick={() => navigate(`/movies/${slide.id}`)}
                    className="homepage-watch-btn z-20 mt-4 border border-orange-700 hover:bg-orange-700 text-white px-6 py-3 rounded-md text-base font-semibold transition-all ease-in-out duration-300"
                  >
                    Watch Now
                  </button>
                ) : (
                  <span className="z-20 mt-4 bg-gray-700 text-white px-6 py-3 rounded-md text-base font-semibold">
                    Coming Soon
                  </span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default MainPage;
