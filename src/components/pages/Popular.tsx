import React from "react";

const movies = [
    {
        title: "The Crown",
        image: "https://resizing.flixster.com/aX9Yz5sNV2WpBA5CoENzIl9RbTM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjI2NTU1OS53ZWJw",
        tag: "New Season",
    },
    {
        title: "Manifest",
        image: "https://m.media-amazon.com/images/M/MV5BMTFlNjg0YjAtYzMwOC00Zjc0LTkwYjAtZmRiYzdjNjcyYjc2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        tag: "New Season",
    },
    {
        title: "Falling for Christmas",
        image: "https://m.media-amazon.com/images/M/MV5BNjRlOTQwZmYtOWVhYy00ZTA1LWEzZWEtNjRhNzU4ODI3NzM1XkEyXkFqcGc@._V1_.jpg",
        tag: "",
    },
    {
        title: "Inside Man",
        image: "https://resizing.flixster.com/aRVnhkhyMVNpfLYSMIUhdBmZWcI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I1NTkzYzZkLWM5ZGUtNGVmZi1hMjE0LTIwNTkzYWRkNjA0NC53ZWJw",
        tag: "Top 10",
    },
];

const Popular: React.FC = () => {
    return (
        <div className="text-white p-6 mt-6">
            <h1 className="text-2xl font-bold mb-4">New & Popular</h1>
            <div className="grid grid-cols-4 gap-4">
                {movies.map((movie, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        {movie.tag && (
                            <span className="absolute top-2 left-2 bg-red-600 px-2 py-1 text-xs font-bold rounded">
                                {movie.tag}
                            </span>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-lg font-bold">{movie.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Popular;
