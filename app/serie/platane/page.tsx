
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Platane",
    description: truncateText("Éric Judor joue une version fictive de lui-même, tentant de relancer sa carrière après un accident de voiture qui l'a laissé dans le coma pendant un an.", 155),
  };
}

export default function PlatanePage() {
  return (
    <MediaDetail />
  );
}
