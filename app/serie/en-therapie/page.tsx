
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie En Thérapie",
    description: truncateText("Suivi de plusieurs patients au cours de leurs séances avec un psychologue parisien juste après les attentats de 2015.", 155),
  };
}

export default function EnThrapiePage() {
  return (
    <MediaDetail />
  );
}
