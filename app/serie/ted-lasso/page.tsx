
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Ted Lasso",
    description: truncateText("Un coach de football américain est embauché pour entraîner une équipe de football anglaise, malgré son ignorance du sport.", 155),
  };
}

export default function TedLassoPage() {
  return (
    <MediaDetail />
  );
}
