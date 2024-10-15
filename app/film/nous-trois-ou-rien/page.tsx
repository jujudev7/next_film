
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Nous trois ou rien",
    description: truncateText("L'histoire vraie d'une famille iranienne qui fuit la dictature pour s'installer en France, racontée avec humour et émotion.", 155),
  };
}

export default function NoustroisourienPage() {
  return (
    <MediaDetail />
  );
}
