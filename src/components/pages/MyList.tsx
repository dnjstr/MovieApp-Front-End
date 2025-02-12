import React from "react";
import Footer from '../layout/Footer';

const myList = [
    {
        title: "Beef",
        year: "2023",
        rating: "16+",
        duration: "1 Season",
        image: "https://m.media-amazon.com/images/M/MV5BYzgxYzg0NmEtNzdhMy00NjFiLTg1MTQtM2EzMDRiOGEwZjI2XkEyXkFqcGc@._V1_.jpg",
    },
    {
        title: "The Diplomat",
        year: "2023",
        rating: "16+",
        duration: "1 Season",
        image: "https://m.media-amazon.com/images/M/MV5BMzZiOTU3ZDktM2VlNC00MGU4LWIxMDItYzNhZGFjYjdiZjQ3XkEyXkFqcGc@._V1_.jpg",
    },
    {
        title: "Paddington",
        year: "2014",
        rating: "PG",
        duration: "1h 35m",
        image: "https://m.media-amazon.com/images/M/MV5BMTAxOTMwOTkwNDZeQTJeQWpwZ15BbWU4MDEyMTI1NjMx._V1_.jpg",
    },
    {
        title: "Wellmania",
        year: "2023",
        rating: "16+",
        duration: "1 Season",
        image: "https://m.media-amazon.com/images/M/MV5BNDc3NDU3YzYtODE5YS00MWMyLTkwMDUtMjMxYjIwYjQ0MzNjXkEyXkFqcGc@._V1_.jpg",
    },
    {
        title: "FREE GUY",
        year: "2021",
        rating: "13+",
        duration: "1h 55m",
        image: "https://i.ebayimg.com/images/g/X18AAOSwU3Zjqt6C/s-l1200.jpg",
    },
    {
        title: "White Chicks",
        year: "2004",
        rating: "13+",
        duration: "1h 49m",
        image: "https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_.jpg",
    },
];

const MyList: React.FC = () => {
    return (
        <div className="text-white p-6 mt-6">
            <h1 className="text-2xl font-bold mb-4">My List</h1>
            <div className="space-y-4">
                {myList.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex items-center p-4 rounded-lg 
                                    bg-gradient-to-r from-orange-900 via-orange-700 to-orange-500"
                    >
                        <img src={item.image} alt={item.title} className="w-28 h-16 object-cover rounded-md mr-4" />
                        <div className="flex-grow">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="text-gray-300 text-sm">
                                {item.year} • {item.rating} • {item.duration}
                            </p>
                        </div>
                        <button className="text-black hover:text-red-900 text-xl">✖</button>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default MyList;
