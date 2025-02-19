import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieVideoPlayer from "../../components/movies/Movievideoplayer";
import { FaArrowLeft } from "react-icons/fa";

const WatchMovie: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [movieUrl, setMovieUrl] = useState<string | null>(null);
    const [movieTitle, setMovieTitle] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Fetch movie data
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                // Simulate API fetch (Replace with actual API call)
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // Mock response
                setMovieUrl(`https://example.com/movies/${id}.mp4`);
                setMovieTitle(`Movie ${id}`);

                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-6 left-6 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-900 transition duration-300 flex items-center gap-2 shadow-md"
            >
                <FaArrowLeft /> Back
            </button>

            {/* Loading & Error Handling */}
            {loading ? (
                <p className="text-white text-lg">Loading movie...</p>
            ) : error ? (
                <p className="text-red-500 text-lg">Error loading movie.</p>
            ) : (
                <>
                    {/* Movie Title */}
                    <h1 className="text-white text-2xl font-bold mb-4">{movieTitle}</h1>

                    {/* Video Player */}
                    {movieUrl ? <MovieVideoPlayer src={movieUrl} /> : <p className="text-gray-400">No movie available.</p>}
                </>
            )}
        </div>
    );
};

export default WatchMovie;
