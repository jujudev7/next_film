
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Maniac",
    description: truncateText("Deux étrangers participent à un essai clinique mystérieux qui promet de guérir leurs problèmes mentaux, mais tout ne se passe pas comme prévu.", 155),
  };
}

export default function ManiacPage() {
  return (
    <MediaDetail />
  );
}
