"use client";

import { useEffect, useState } from "react";
import MediaList from "./components/MediaList";
import movies from "./data/movies-infos"; // Assurez-vous que les chemins d'importation sont corrects
import series from "./data/series-infos";

// Type Media
type Media = {
  title: string;
  year: number;
  poster: string;
  category: string;
};

export default function Home() {
  const [displayedMedia, setDisplayedMedia] = useState<Media[]>([]);

  // Mélanger les films et séries une seule fois au montage initial
  useEffect(() => {
    const shuffleArray = (array: Media[]): Media[] => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setDisplayedMedia(shuffleArray([...movies, ...series]));
  }, []);

  return (
    <main className="max-w-[1200px] mx-auto pt-2">
      <div className="mx-4">
        <div className="flex flex-row justify-between items-center"></div>
        <MediaList media={displayedMedia} />
      </div>
    </main>
  );
}
