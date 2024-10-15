
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Training Day",
    description: truncateText("Jake Hoyt, nouvelle recrue de la police de Los Angeles, va vivre une folle mise à l'essai de 24 heures auprès du sergent-chef Alonzo Harris, vétéran de la lutte antidrogue...", 155),
  };
}

export default function TrainingDayPage() {
  return (
    <MediaDetail />
  );
}
