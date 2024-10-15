
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie The Sopranos",
    description: truncateText("Tony Soprano, chef d'une organisation mafieuse, jongle entre les problèmes familiaux et les affaires criminelles.", 155),
  };
}

export default function TheSopranosPage() {
  return (
    <MediaDetail />
  );
}
