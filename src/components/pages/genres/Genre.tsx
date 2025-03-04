import React from "react";
import { usePreferences } from "../../../context/PreferencesContext";
import { useGenres } from "../../../hooks/useGenre";
import GenreItem from "./genreTemplates/genreItem";

const Genre: React.FC = () => {
    const textColor = usePreferences();
    const { data: genreCounts = [], isLoading, isError } = useGenres();

    if (isLoading) {
        return <div className="text-white text-center my-[382px]">Loading...</div>;
    }

    if (isError) {
        return <div className="text-red-500 text-center my-[382px]">Failed to fetch genres.</div>;
    }

    if (genreCounts.length === 0) {
        return <div className="text-white text-center my-[382px]">No genres found</div>;
    }

    return (
        <div className="mx-auto px-7 flex justify-start flex-col mb-[62px]">
            <div>
                <div className="text-center mt-[88px] mb-4">
                    <h1 className={`text-4xl font-bold mb-2 ${textColor}`}>Browse by Genre</h1>
                    <p className={`${textColor} pb-5`}>Discover your next favorite movie across multiple genres</p>
                </div>
                <div className="bookmark-scroll-bar overflow-y-scroll h-[530px] px-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {genreCounts.map((genre, index) => (
                            genre.genre && <GenreItem key={genre.genre} genre={genre.genre.trim()} count={genre.count} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Genre;
