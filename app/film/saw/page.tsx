
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Saw",
    description: truncateText("Deux hommes se réveillent enchaînés dans une pièce et doivent résoudre des énigmes mortelles pour survivre.", 155),
  };
}

export default function SawPage() {
  return (
    <MediaDetail />
  );
}
