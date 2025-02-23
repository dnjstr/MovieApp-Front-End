import React, { useState, useEffect } from "react";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


const MyList: React.FC = () => {
    const [myList, setMyList] = useState<any[]>([]);
    const userToken = localStorage.getItem("token") || "";
    const navigate = useNavigate();

    const fetchBookmarks = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/bookmarks/", {
                headers: {
                    Authorization: `Token ${userToken}`,
                },
            });

            if (!response.ok) throw new Error("Failed to fetch bookmarks");

            const data = await response.json();
            setMyList(data);
        } catch (error) {
            console.error("Error fetching bookmarks:", error);
        }
    };

    useEffect(() => {
        if (userToken) fetchBookmarks();
    }, [userToken]);

    const removeFromList = async (MovieId: number) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/bookmarks/remove/${MovieId}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${userToken}`,
                },
            });

            if (!response.ok) throw new Error("Failed to remove bookmark");

            await fetchBookmarks();
        } catch (error) {
            console.error("Error removing bookmark:", error);
        }
    };

    return (
        <div className="flex flex-col txtlg:justify-between h-screen text-white px-6">
            <div className="flex flex-col txtlg:flex-row txtlg:justify-around gap-10 h-screen mt-10 txtlg:mt-24">
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
                                    onClick={() => removeFromList(item.movie)}
                                    className="text-white hover:text-red-900 text-xl ms-5"
                                >
                                    ✖
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="my-6">
                <Footer />
            </div>
        </div>
    );
};

export default MyList;