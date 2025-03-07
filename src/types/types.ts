
// MainPage
export interface MovieSlide {
    id: number;
    title: string;
    description: string;
    poster_image: string;
    video: string;
    release_date: string;
}

export interface MovieSliderProps {
    slides: MovieSlide[];
    setCurrentVideo: (video: string | null) => void;
}


// Search
export interface SearchResultsProps {
    results: Movie[];
    onClose: () => void;
}


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
    index: number;
}

export interface MovieCardProps {
    movie: Movie;
    setSelectedMovie: (movie: Movie) => void;
}

export interface MovieHeaderProps {
    selectedMovie: Movie | null;
    navigate: (path: string) => void;
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

export interface BookmarkItemProps {
    bookmark: Bookmark;
    textColor: string;
    onRemove: (movieId: number) => void;
}

export interface BookmarkListProps {
  bookmarks: Bookmark[];
  textColor: string;
  onRemove: (movieId: number) => void;
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

export interface MoviePlayerContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}


// Preference
export interface ActionButtonsProps {
    onClose: () => void;
    onSave: () => void;
    tempTextColor: string;
}

export interface ThemeSelectorProps {
    tempBgColor: string;
    tempTextColor: string;
    onChange: (value: string) => void;
}

export interface PreferencesModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export type PreferencesContextType = {
    bgColor: string;
    setBgColor: (color: string) => void;
    textColor: string;
    setTextColor: (color: string) => void;
    isLoaded: boolean;
};


// Authentication
export interface User {
  name: string;
  email: string;
  profilePic?: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  role: "admin" | "user" | null;
  user: User | null;
  loading: boolean;
  login: (token: string, role: "admin" | "user", user: User) => void;
  logout: () => void;
}


// Services
export interface LocationState {
    identifier?: string;
}