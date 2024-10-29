
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie I Am Not Okay With This",
    description: truncateText("Une adolescente navigue entre les complexités de l'adolescence et la découverte de pouvoirs surnaturels qui la dépassent.", 155),
  };
}

export default function IAmNotOkayWithThisPage() {
  return (
    <MediaDetail />
  );
}
