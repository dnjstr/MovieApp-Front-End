import React, { useState, useEffect } from "react";
import Footer from "../layout/Footer";

const MyList: React.FC = () => {
    const [myList, setMyList] = useState<any[]>([]);

    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
        setMyList(storedBookmarks);
    }, []);

    const removeFromList = (id: number) => {
        const updatedList = myList.filter((movie) => movie.id !== id);
        setMyList(updatedList);
        localStorage.setItem("bookmarks", JSON.stringify(updatedList));
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
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[80px] h-[120px] object-cover rounded-md mr-4"
                                />
                                <div className="flex-grow">
                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                    <p className="text-gray-300 text-sm">
                                        {item.year} • {item.rating} • {item.duration}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeFromList(item.id)}
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
