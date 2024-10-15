
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Severance",
    description: truncateText("Des employés d'une entreprise subissent une procédure pour séparer leurs souvenirs professionnels de leurs souvenirs personnels, menant à des résultats inattendus.", 155),
  };
}

export default function SeverancePage() {
  return (
    <MediaDetail />
  );
}
