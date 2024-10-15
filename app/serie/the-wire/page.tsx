
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie The Wire",
    description: truncateText("Une exploration réaliste de la vie dans la ville de Baltimore à travers le prisme de la lutte entre la police et les narcotrafiquants.", 155),
  };
}

export default function TheWirePage() {
  return (
    <MediaDetail />
  );
}
