
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Cœurs Noirs",
    description: truncateText("Une unité d'élite des forces spéciales françaises en mission en Irak se retrouve confrontée à des dilemmes moraux et personnels alors qu'ils luttent pour accomplir leur mission.", 155),
  };
}

export default function CursNoirsPage() {
  return (
    <MediaDetail />
  );
}
