
// Review
export interface Review {
    id: number; 
    user: { fullName: string };
    rating: number;
    review_text: string;
    created_at: string;
}


// Movie
export interface Movie {
    id: number;
    title: string;
    genre: string;
    main_cast: string;
    director: string;
    description: string;
    release_date: string;
    duration: string;
    poster_image: string;
    average_rating: number;
}


// Genre
export interface GenreItemProps {
    genre: string;
    count: number;
}


// Bookmark
export interface Bookmark {
    id: number;
    movie: number;
    movie_title: string;
    movie_poster: string;
    movie_release_date: string;
    movie_director: string;
}


// Movie Player
export interface MoviePlayerProps {
  videoUrl: string;
  onClose: () => void;
}

export interface MovieVideoPlayerProps {
    src: string;
}

export interface ErrorMessageProps {
    onClose: () => void;
}

export interface FullscreenButtonProps {
    onClick: () => void;
}

export interface MuteButtonProps {
  isMuted: boolean;
  onClick: () => void;
}

export interface PlayPauseButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}