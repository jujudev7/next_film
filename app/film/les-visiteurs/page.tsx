
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Les Visiteurs",
    description: truncateText("Un chevalier du Moyen Âge et son écuyer sont transportés dans le futur, où ils découvrent un monde moderne totalement déconcertant.", 155),
  };
}

export default function LesVisiteursPage() {
  return (
    <MediaDetail />
  );
}
