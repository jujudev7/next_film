
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Cube",
    description: truncateText("Un groupe d'étrangers se réveille dans un labyrinthe de pièces cubiques et doit trouver comment en sortir, face à de nombreux pièges.", 155),
  };
}

export default function CubePage() {
  return (
    <MediaDetail />
  );
}