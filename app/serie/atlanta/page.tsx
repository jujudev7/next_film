
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Atlanta",
    description: truncateText("Un jeune manager tente de percer dans la scène musicale rap d'Atlanta, tout en naviguant dans les défis de la vie quotidienne.", 155),
  };
}

export default function AtlantaPage() {
  return (
    <MediaDetail />
  );
}
