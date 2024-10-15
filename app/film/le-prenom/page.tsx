
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Le Prénom",
    description: truncateText("Lors d'un dîner, Vincent annonce le prénom qu'il a choisi pour son fils. Cette révélation déclenche des tensions et des disputes inattendues parmi les invités.", 155),
  };
}

export default function LePrnomPage() {
  return (
    <MediaDetail />
  );
}
