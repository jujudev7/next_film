
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Osmosis",
    description: truncateText("Dans un futur proche, une technologie permet de trouver l'âme sœur parfaite en analysant le cerveau, mais l'amour peut-il vraiment être prédit scientifiquement ?", 155),
  };
}

export default function OsmosisPage() {
  return (
    <MediaDetail />
  );
}
