import React from "react";
import { Link } from "react-router-dom";
import { getGenreIcon } from "../../../../utils/genreIcons";
import { GenreItemProps } from "../../../../types/types";

const GenreItem: React.FC<GenreItemProps> = ({ genre, count }) => {
    const { icon, color } = getGenreIcon(genre);

    return (
        <Link
            to={`/genre/${genre.toLowerCase()}`}
            className="relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-800 rounded-lg min-w-full"
        >
            <div className={`absolute inset-0 ${color} opacity-10 hover:opacity-20 transition-opacity duration-300`} />
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className={`${color} text-white p-3 rounded-lg`}>
                        <span className="text-2xl">{icon}</span>
                    </div>
                    <span className="text-sm text-gray-400">{count} Movies</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white hover:text-blue-400 transition-colors duration-300">
                    {genre}
                </h3>
                <div className="h-1 w-12 bg-gray-700 group-hover:w-full group-hover:bg-blue-500 transition-all duration-300" />
            </div>
        </Link>
    );
};

export default GenreItem;
