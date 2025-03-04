import React from "react";
import { Link } from "react-router-dom";
import { getGenreIcon } from "../../../../utils/genreIcons";
import { GenreItemProps } from "../../../../types/types";

const GenreItem: React.FC<GenreItemProps> = ({ genre, count, index }) => {
    const isEven = index % 2 === 0;
    const { icon } = getGenreIcon(genre);

    const backgroundColor = isEven ? 'genre-orange' : 'bg-gray-800';
    const hoverBackgroundColor = isEven ? 'genre-orange:hover' : 'hover:bg-gray-900';
    const iconColor = isEven ? 'bg-orange-500' : 'bg-gray-500';
    const lineColor = isEven ? 'bg-gray-500' : 'bg-gray-600';

    return (
        <Link
            to={`/genre/${genre.toLowerCase()}`}
            className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${backgroundColor} ${hoverBackgroundColor} rounded-lg min-w-full`}
        >
            <div className={`absolute inset-0 opacity-10 hover:opacity-20 transition-opacity duration-300`} />
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className={`text-white p-3 rounded-lg ${iconColor}`}>
                        <span className="text-2xl">{icon}</span>
                    </div>
                    <span className="text-sm text-gray-400">{count} Movies</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-300">
                    {genre}
                </h3>
                <div className={`h-1 w-12 ${lineColor} group-hover:w-full transition-all duration-300`} />
            </div>
        </Link>
    );
};

export default GenreItem;
