import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film La Fracture",
    description: truncateText(
      "Thibaut, chef d'orchestre de renommée mondiale, apprend qu'il a été adopté et qu'il a un frère, Jimmy, qui vit dans le nord de la France. Tout semble les opposer, sauf leur amour commun pour la musique...",
      155
    ),
  };
}

export default function LaFracturePage() {
  return <MediaDetail />;
}

