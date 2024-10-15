
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Interstellar",
    description: truncateText("Dans un futur où la Terre est en péril, un groupe d'explorateurs voyage à travers un trou de ver pour trouver un nouveau foyer pour l'humanité.", 155),
  };
}

export default function InterstellarPage() {
  return (
    <MediaDetail />
  );
}
