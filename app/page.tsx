"use client";

import Image from "next/image";
import { useEffect, useState } from "react"; // Importer useEffect
import MoviesList from "./components/MoviesList";
import { Sort } from "./components/Sort";
import movies from "./data/movies-infos";
import series from "./data/series-infos";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all"); // État pour la catégorie sélectionnée
  const [shuffledMovies, setShuffledMovies] = useState<string[]>([]); // État pour les films et séries mélangés

  // Fonction pour changer la catégorie sélectionnée
  const handleSortChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Fonction pour mélanger un tableau
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Choisir un index aléatoire
      [array[i], array[j]] = [array[j], array[i]]; // Échanger les éléments
    }
    return array;
  };

  // Utiliser useEffect pour mélanger les films et séries une fois lors du premier rendu
  useEffect(() => {
    const combined = [...movies, ...series];
    setShuffledMovies(shuffleArray(combined));
  }, []); // Ne s'exécute qu'une fois au montage

  // Filtrer les films ou séries en fonction de la catégorie sélectionnée
  const filteredMovies =
    selectedCategory === "films"
      ? movies
      : selectedCategory === "series"
      ? series
      : shuffledMovies; // Utiliser les films et séries mélangés

  return (
    <main className="max-w-1400 w-3/5 sm:w-full mx-auto pt-2">
      <div className="mx-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl text-center font-bold mb-6">
            <Image
              src={"/nextfilm_logo.svg"}
              alt={"Nextfilm logo"}
              width={300}
              height={94}
              className="ml-4 sm:ml-0 hover:scale-105"
              priority={true}
            />
          </h1>
          <Sort onSortChange={handleSortChange} />{" "}
          {/* Passer la fonction à Sort */}
        </div>
        <MoviesList movies={filteredMovies} />{" "}
        {/* Passer les films ou séries filtrés */}
      </div>
    </main>
  );
}
