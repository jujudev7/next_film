import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Une histoire sans fin",
    description: truncateText(
      "Un jeune garçon découvre un livre magique qui le transporte dans le monde fantastique de Fantasia, en péril.",
      155
    ),
  };
}

export default function LHistoireSansFinPage() {
  return <MediaDetail />;
}

