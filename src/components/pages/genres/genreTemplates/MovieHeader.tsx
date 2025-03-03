import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Movie } from "../../../../types/types";

interface MovieHeaderProps {
    selectedMovie: Movie | null;
    navigate: (path: string) => void;
}

const MovieHeader: React.FC<MovieHeaderProps> = ({ selectedMovie, navigate }) => {
    const [infoType, setInfoType] = useState<'description' | 'genreRelease' | 'mainCastDirector'>('description');

    useEffect(() => {
        const interval = setInterval(() => {
            setInfoType((prev) =>
                prev === "description"
                    ? "genreRelease"
                    : prev === "genreRelease"
                    ? "mainCastDirector"
                    : "description"
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative z-10 p-6 rounded-lg transition-all duration-500 flex items-center"
            style={{
                height: "400px",
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${selectedMovie?.poster_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "background-image 0.5s ease-in-out",
                zIndex: 1,
            }}
        >
            <button
                onClick={() => navigate("/genre")}
                className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 text-white rounded bg-gradient-to-b from-orange-600 to-orange-900 transition duration-300"
            >
                <FaArrowLeft /> Back
            </button>

            <div className="px-6 text-white flex flex-col h-[100px]">
                <p className="text-3xl font-bold">{selectedMovie?.title}</p>
                <div className="text-gray-400 text-sm ps-3">
                    {infoType === "description" && <p>{selectedMovie?.description}</p>}
                    {infoType === "genreRelease" && (
                        <>
                            <p>{selectedMovie?.genre}</p>
                            <p>{selectedMovie?.release_date}</p>
                            <p>{selectedMovie?.duration}</p>
                        </>
                    )}
                    {infoType === "mainCastDirector" && (
                        <>
                            <p>Main Cast: {selectedMovie?.main_cast}</p>
                            <p>Director: {selectedMovie?.director}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieHeader;
