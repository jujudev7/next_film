import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Les Évadés",
    description: truncateText(
      "Andy Dufresne est condamné à la prison à vie pour le meurtre de sa femme et de son amant, bien qu'il clame son innocence. À la prison de Shawshank, il se lie d'amitié avec Red, un détenu de longue date. Ensemble, ils tentent de survivre aux dures réalités de la vie carcérale...",
      155
    ),
  };
}

export default function LesEvadesPage() {
  return <MediaDetail />;
}

