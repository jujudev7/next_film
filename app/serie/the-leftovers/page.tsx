
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie The Leftovers",
    description: truncateText("Après la disparition mystérieuse de 2% de la population mondiale, ceux qui restent tentent de comprendre l'inexplicable et de reconstruire leur vie.", 155),
  };
}

export default function TheLeftoversPage() {
  return (
    <MediaDetail />
  );
}
