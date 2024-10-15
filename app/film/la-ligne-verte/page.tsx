
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film La Ligne Verte",
    description: truncateText("Dans le couloir de la mort d'une prison en Louisiane, un gardien remarque les dons surnaturels d'un condamné à mort. Quand la peine de mort côtoie l'émotion...", 155),
  };
}

export default function LaLigneVertePage() {
  return (
    <MediaDetail />
  );
}
