"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MediaList from "./components/MediaList";
import { Sort } from "./components/Sort";
import movies from "./data/movies-infos";
import series from "./data/series-infos";

type Media = {
  title: string;
  year: number;
  poster: string;
};

export default function Home() {
  const [displayedMedia, setDisplayedMedia] = useState<Media[]>([]); // Typage pour éviter "any"

  // Fonction pour mélanger un tableau
  const shuffleArray = (array: Media[]): Media[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Fonction pour changer la catégorie sélectionnée
  const handleSortChange = (category: string) => {
    if (category === "films") {
      setDisplayedMedia(shuffleArray([...movies])); // Mélanger les films
    } else if (category === "series") {
      setDisplayedMedia(shuffleArray([...series])); // Mélanger les séries
    } else {
      setDisplayedMedia(shuffleArray([...movies, ...series])); // Mélanger les deux
    }
  };

  // Mélanger les films et séries une seule fois au montage initial
  useEffect(() => {
    setDisplayedMedia(shuffleArray([...movies, ...series]));
  }, []);

  return (
    <main className="max-w-[1200px] mx-auto pt-2">
      <div className="mx-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl text-center font-bold mb-3">
            <Image
              src={"/nextfilm_logo.svg"}
              alt={"Nextfilm"}
              width={220}
              height={69}
              className="sm:ml-0 hover:scale-105"
              priority={true}
            />
          </h1>
          <Sort onSortChange={handleSortChange} />
        </div>
        <MediaList media={displayedMedia} />
      </div>
    </main>
  );
}

