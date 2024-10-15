
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Squid Game",
    description: truncateText("Des personnes endettées participent à une série de jeux mortels pour gagner une somme d'argent qui pourrait changer leur vie.", 155),
  };
}

export default function SquidGamePage() {
  return (
    <MediaDetail />
  );
}
