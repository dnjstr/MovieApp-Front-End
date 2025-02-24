import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import useBookmarkStore from "../../store/useBookmarkStore";

const MyList: React.FC = () => {
    const userToken = localStorage.getItem("token") || "";
    const navigate = useNavigate();
    
    // Zustand store
    const { myList, fetchBookmarks, removeFromList } = useBookmarkStore();

    useEffect(() => {
        if (userToken) fetchBookmarks(userToken);
    }, [userToken, fetchBookmarks]);

    return (
        <div className="flex flex-col txtlg:justify-between text-white px-6 mb-[127px]">
            <div className="flex flex-col txtlg:flex-row txtlg:justify-around txtlg:items-center gap-10 mt-10 txtlg:mt-24">
                <div className="text-center lg:flex-1">
                    <h1 className="text-5xl font-bold mb-2 mt-12">My List</h1>
                    <p className="text-lg text-gray-300 mb-6">Keep track of your favorite movies and shows here!</p>

                    {/* Swiper Section */}
                    <div className="flex justify-center mb-6">
                        <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        className="w-64"
                        >
                        {myList.map((item) => (
                            <SwiperSlide key={item.id}>
                            <img
                                src={item.movie_poster}
                                alt={item.movie_title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                </div>
                <div className="bookmark-scroll-bar txtlg:space-y-4 txtlg:mt-12 flex-auto overflow-y-scroll max-h-400">
                    {myList.length === 0 ? (
                        <p className="text-gray-400 flex justify-center p-48">No movies added yet.</p>
                    ) : (
                        myList.map((item) => (
                            <div
                                key={item.id}
                                className="bookmark-item flex items-center p-4 rounded-lg border-s-2 border-orange-700 "
                            >
                                <img
                                    src={item.movie_poster}
                                    alt={item.movie_title}
                                    className="w-[80px] h-[120px] object-cover rounded-md mr-4"
                                    onClick={() => navigate(`/movies/${item.movie}/`)}
                                />
                                <div 
                                    className="flex-grow"
                                    onClick={() => navigate(`/movies/${item.movie}/`)}
                                >
                                    <h2 className="text-lg font-bold">{item.movie_title}</h2>
                                    <p className="text-gray-300 text-sm">
                                        {item.movie_release_date} • Directed by: {item.movie_director}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeFromList(userToken, item.movie)}
                                    className="text-white hover:text-red-900 text-xl ms-5"
                                >
                                    ✖
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyList;
