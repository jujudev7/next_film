
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Forrest Gump",
    description: truncateText("Forrest Gump, un homme simple d'esprit mais au grand cœur, vit des événements marquants de l'histoire américaine tout en poursuivant son amour d'enfance.", 155),
  };
}

export default function ForrestGumpPage() {
  return (
    <MediaDetail />
  );
}
