import React from "react";
import { useNavigate } from "react-router-dom";

interface Bookmark {
  id: number;
  movie: number;
  movie_title: string;
  movie_poster: string;
  movie_release_date: string;
  movie_director: string;
}

interface BookmarkItemProps {
  bookmark: Bookmark;
  textColor: string;
  onRemove: (movieId: number) => void;
}

const BookmarkItem: React.FC<BookmarkItemProps> = ({ bookmark, textColor, onRemove }) => {
  const navigate = useNavigate();

  return (
    <div className="bookmark-item flex items-center p-4 rounded-lg border-s-2 border-orange-700">
      <img
        src={bookmark.movie_poster}
        alt={bookmark.movie_title}
        className="w-[80px] h-[120px] object-cover rounded-md mr-4"
        onClick={() => navigate(`/movies/${bookmark.movie}/`)}
      />
      <div className="flex-grow cursor-pointer" onClick={() => navigate(`/movies/${bookmark.movie}/`)}>
        <h2 className="text-lg font-bold">{bookmark.movie_title}</h2>
        <p className={`${textColor} text-xs ps-1`}>
          {bookmark.movie_release_date} • Directed by: {bookmark.movie_director}
        </p>
      </div>
      <button onClick={() => onRemove(bookmark.movie)} className={`${textColor} hover:text-red-900 text-xl ms-5`}>
        ✖
      </button>
    </div>
  );
};

export default BookmarkItem;
