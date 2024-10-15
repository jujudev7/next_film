
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Ils",
    description: truncateText("Un couple vivant à la campagne est terrorisé par de mystérieux intrus qui envahissent leur maison pendant la nuit.", 155),
  };
}

export default function IlsPage() {
  return (
    <MediaDetail />
  );
}
