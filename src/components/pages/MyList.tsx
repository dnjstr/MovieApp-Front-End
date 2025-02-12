import React from "react";

const myList = [
    {
        title: "Beef",
        image: "https://m.media-amazon.com/images/M/MV5BYzgxYzg0NmEtNzdhMy00NjFiLTg1MTQtM2EzMDRiOGEwZjI2XkEyXkFqcGc@._V1_.jpg",
        tag: "Top 10",
    },
    {
        title: "The Diplomat",
        image: "https://m.media-amazon.com/images/M/MV5BMzZiOTU3ZDktM2VlNC00MGU4LWIxMDItYzNhZGFjYjdiZjQ3XkEyXkFqcGc@._V1_.jpg",
        tag: "Top 10",
    },
    {
        title: "Paddington",
        image: "https://m.media-amazon.com/images/M/MV5BMTAxOTMwOTkwNDZeQTJeQWpwZ15BbWU4MDEyMTI1NjMx._V1_.jpg",
        tag: "",
    },
    {
        title: "Wellmania",
        image: "https://m.media-amazon.com/images/M/MV5BNDc3NDU3YzYtODE5YS00MWMyLTkwMDUtMjMxYjIwYjQ0MzNjXkEyXkFqcGc@._V1_.jpg",
        tag: "",
    },
    {
        title: "FREE GUY",
        image: "https://i.ebayimg.com/images/g/X18AAOSwU3Zjqt6C/s-l1200.jpg",
        tag: "",
    },
    {
        title: "White Chicks",
        image: "https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_.jpg",
        tag: "",
    },
];

const MyList: React.FC = () => {
    return (
        <div className="text-white p-6 mt-6">
            <h1 className="text-2xl font-bold mb-4">My List</h1>
            <div className="grid grid-cols-4 gap-4">
                {myList.map((item, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        {item.tag && (
                            <span className="absolute top-2 left-2 bg-red-600 px-2 py-1 text-xs font-bold rounded">
                                {item.tag}
                            </span>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-lg font-bold">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyList;
