
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Titanic",
    description: truncateText("L'histoire tragique de l'énorme paquebot, mêlée à une romance impossible entre Jack et Rose, deux passagers de classes sociales opposées.", 155),
  };
}

export default function TitanicPage() {
  return (
    <MediaDetail />
  );
}
