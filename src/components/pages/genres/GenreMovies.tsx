import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "../../../types/types";
import { fetchMoviesByGenre } from "../../../hooks/useMovieGenre";
import MovieHeader from "./genreTemplates/MovieHeader";
import MovieGenreCard from "./genreTemplates/MovieGenreCard";


const GenreMovies: React.FC = () => {
    const { genreName } = useParams<{ genreName: string }>();
    const navigate = useNavigate();
    
    const { data: movies = [], isLoading, error } = useQuery({
        queryKey: ["moviesByGenre", genreName],
        queryFn: () => fetchMoviesByGenre(genreName!),
        enabled: !!genreName,
    });

    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [infoType, setInfoType] = useState<'description' | 'genreRelease' | 'mainCastDirector'>('description');

    useEffect(() => {
        if (movies.length > 0) {
            setSelectedMovie(movies[0]);
        }
    }, [movies]);

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

    if (isLoading) {
        return <div className="text-white text-center mt-32">Loading...</div>;
    }

    if (error) {
        return <div className="text-white text-center mt-32">Error: {error instanceof Error ? error.message : "Error occurred"}</div>;
    }

    return (
        <div className="genre-movies-page mx-auto lg:px-32 py-8 pt-28 z-10">
            <MovieHeader selectedMovie={selectedMovie} navigate={navigate} />
            
            <div className="mb-2 mt-5">
                <h1 className="text-3xl font-bold text-white capitalize">{genreName} Movies</h1>
            </div>

            {movies.length === 0 ? (
                <p className="text-white text-center">No movies found in this genre.</p>
            ) : (
                <div className="genre-scroll-bar overflow-x-scroll genre-movies-container grid grid-flow-col auto-cols-max gap-8 border-t-4 border-orange-700 rounded px-5 py-4 h-[342px]">
                    {movies.map((movie: Movie) => (
                        <MovieGenreCard key={movie.id} movie={movie} setSelectedMovie={setSelectedMovie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default GenreMovies;
