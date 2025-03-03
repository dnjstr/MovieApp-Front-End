export interface Review {
    id: number; 
    user: { fullName: string };
    rating: number;
    review_text: string;
    created_at: string;
}

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

export interface MoviePlayerProps {
  videoUrl: string;
  onClose: () => void;
}
