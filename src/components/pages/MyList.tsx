import React, { useState, useEffect } from "react";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";

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
        <div className="flex flex-col min-h-screen text-white p-6 mt-6">
            <div className="flex-grow">
                <h1 className="text-2xl font-bold mb-4">My List</h1>
                <div className="space-y-4">
                    {myList.length === 0 ? (
                        <p className="text-gray-400 flex justify-center p-48">No movies added yet.</p>
                    ) : (
                        myList.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center p-4 rounded-lg bg-gradient-to-r from-orange-900 via-orange-700 to-orange-500"
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
                                    className="text-black hover:text-red-900 text-xl"
                                >
                                    ✖
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyList;