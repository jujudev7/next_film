"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { GiTv } from "react-icons/gi";
import { MdLocalMovies } from "react-icons/md";

type SortProps = {
  onSortChange: (category: string) => void; // Ajouter une prop pour la fonction de changement
};

export function Sort({ onSortChange }: SortProps) {
  const [activeButton, setActiveButton] = useState<string | null>(null); // État pour le bouton actif

  const handleSortChange = (category: string) => {
    // Vérifier si le bouton cliqué est déjà actif
    if (activeButton === category) {
      // Si le bouton actif est cliqué à nouveau, réinitialiser l'état
      setActiveButton(null); // Réinitialiser l'état actif
      onSortChange(""); // Appeler la fonction de changement pour afficher tout
    } else {
      setActiveButton(category); // Mettre à jour le bouton actif
      onSortChange(category); // Appeler la fonction de changement
    }
  };

  return (
    <div className="flex space-x-4">
      <Button
        onClick={() => handleSortChange("films")}
        className={`flex items-center justify-center px-4 py-2 text-black rounded transition 
          ${
            activeButton === "films"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-slate-300 hover:bg-blue-600 hover:text-white"
          }`}
      >
        Films
        <MdLocalMovies className="ml-2" />
      </Button>
      <Button
        onClick={() => handleSortChange("series")}
        className={`flex items-center justify-center px-4 py-2 text-black rounded transition 
          ${
            activeButton === "series"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-slate-300 hover:bg-blue-600 hover:text-white"
          }`}
      >
        Séries
        <GiTv className="ml-2" />
      </Button>
    </div>
  );
}
