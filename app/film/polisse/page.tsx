
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Polisse",
    description: truncateText("La vie quotidienne d'une brigade de protection des mineurs à Paris, entre la violence des affaires à traiter et la complexité de leurs vies personnelles.", 155),
  };
}

export default function PolissePage() {
  return (
    <MediaDetail />
  );
}
