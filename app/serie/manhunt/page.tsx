
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Manhunt",
    description: truncateText("Basée sur des histoires vraies, cette série suit des enquêtes intenses menées par le FBI pour capturer des criminels de grande envergure.", 155),
  };
}

export default function ManhuntPage() {
  return (
    <MediaDetail />
  );
}
