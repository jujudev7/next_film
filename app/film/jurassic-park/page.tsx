
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Jurassic Park",
    description: truncateText("Des scientifiques recréent des dinosaures et ouvrent un parc d'attractions qui tourne au cauchemar.", 155),
  };
}

export default function JurassicParkPage() {
  return (
    <MediaDetail />
  );
}
