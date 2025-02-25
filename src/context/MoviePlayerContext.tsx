import React, { createContext, useContext, useState } from "react";

interface MoviePlayerContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const MoviePlayerContext = createContext<MoviePlayerContextType>({
  isPlaying: false,
  setIsPlaying: () => {},
});

export const MoviePlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <MoviePlayerContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </MoviePlayerContext.Provider>
  );
};

export const useMoviePlayer = () => useContext(MoviePlayerContext);
