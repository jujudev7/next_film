
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Les Trois Frères",
    description: truncateText("Le même jour, trois hommes découvrent qu'ils sont frères et héritent de 3 millions. Mais 10 jours plus tard, l'héritage est perdu et la galère commence pour les frangins...", 155),
  };
}

export default function LesTroisFrresPage() {
  return (
    <MediaDetail />
  );
}
