
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Seven",
    description: truncateText("À 7 jours de la retraite, l'inspecteur Somerset tombe sur un criminel peu ordinaire. John Doe, l'assassin, est lancé dans une série de meurtres basés sur les 7 péchés capitaux...", 155),
  };
}

export default function SevenPage() {
  return (
    <MediaDetail />
  );
}
