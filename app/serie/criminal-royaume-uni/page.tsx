
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Criminal: Royaume-Uni",
    description: truncateText("Plongée au cœur des salles d'interrogatoire, où l'on suit à chaque épisode les confrontations tendues entre suspects et enquêteurs. Cette série policière est à l'échelle européenne existe aussi Criminal: Allemagne, Espagne et France.", 155),
  };
}

export default function CriminalRoyaumeUniPage() {
  return (
    <MediaDetail />
  );
}
