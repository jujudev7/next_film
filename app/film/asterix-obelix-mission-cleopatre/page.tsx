import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Astérix & Obélix : Mission Cléopâtre",
    description: truncateText(
      "Astérix et Obélix partent en Égypte pour aider un architecte à construire un palais pour Cléopâtre en un temps record.",
      155
    ),
  };
}

export default function AsterixObelixMissionCleopatrePage() {
  return <MediaDetail />;
}

