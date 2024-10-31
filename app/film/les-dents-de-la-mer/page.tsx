import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Les Dents de la mer",
    description: truncateText(
      "Un requin tueur terrorise une petite station balnéaire, et un chef de police doit l'affronter.",
      155
    ),
  };
}

export default function LesDentsdelaMerPage() {
  return <MediaDetail />;
}

