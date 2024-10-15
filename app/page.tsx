"use client";

import { useEffect, useState } from "react";
import LazyMediaList from "./components/LazyMediaList";
import { useMedia } from "./context/MediaContext"; // Importation du contexte
import movies from "./data/movies-infos";
import series from "./data/series-infos";

// Type Media
type Media = {
  title: string;
  year: number;
  poster: string;
  category: string;
};

export default function Home() {
  const { filteredMedia } = useMedia(); // Récupère filteredMedia du contexte
  const [displayedMedia, setDisplayedMedia] = useState<Media[]>([]);

  // Fonction pour mélanger les tableaux
  const shuffleArray = (array: Media[]): Media[] => {
    const shuffled = [...array]; // Copie pour éviter de modifier l'original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Mélanger tous les médias au premier chargement (films + séries)
  useEffect(() => {
    setDisplayedMedia(shuffleArray([...movies, ...series]));
  }, []); // Se déclenche uniquement au premier rendu

  // Mélanger à chaque fois que filteredMedia change
  useEffect(() => {
    if (filteredMedia.length > 0) {
      setDisplayedMedia(shuffleArray(filteredMedia));
    }
  }, [filteredMedia]); // Se déclenche lorsque le filtre change

  return (
    <main className="max-w-[1200px] mx-auto pt-2">
      <div className="mx-4">
        <div className="flex flex-row justify-between items-center"></div>
        <LazyMediaList media={displayedMedia} />
      </div>
    </main>
  );
}
