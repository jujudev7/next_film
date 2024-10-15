
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Dix pour cent",
    description: truncateText("Une agence de talents à Paris gère les crises professionnelles et personnelles de ses clients célèbres tout en jonglant avec ses propres défis.", 155),
  };
}

export default function DixpourcentPage() {
  return (
    <MediaDetail />
  );
}
