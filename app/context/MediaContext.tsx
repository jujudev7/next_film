"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import movies from "../data/movies-infos";
import series from "../data/series-infos";

// Type pour Media
type Media = {
  title: string;
  year: number;
  poster: string;
  category: string;
};

// Type pour le contexte
type MediaContextType = {
  filteredMedia: Media[];
  handleSortChange: (category: string) => void;
};

// Création du contexte
const MediaContext = createContext<MediaContextType | undefined>(undefined);

// Provider du contexte
export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const [filteredMedia, setFilteredMedia] = useState<Media[]>([
    ...movies,
    ...series,
  ]);

  const handleSortChange = (category: string) => {
    if (category === "films") {
      setFilteredMedia(movies);
    } else if (category === "series") {
      setFilteredMedia(series);
    } else {
      setFilteredMedia([...movies, ...series]);
    }
  };

  return (
    <MediaContext.Provider value={{ filteredMedia, handleSortChange }}>
      {children}
    </MediaContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error("useMedia must be used within a MediaProvider");
  }
  return context;
};
