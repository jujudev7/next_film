
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Mon amie Adèle",
    description: truncateText("Une jeune femme s'embarque dans une relation compliquée avec son patron et sa femme mystérieuse, révélant un dangereux triangle amoureux.", 155),
  };
}

export default function MonamieAdlePage() {
  return (
    <MediaDetail />
  );
}
