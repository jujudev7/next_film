
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Brooklyn Nine-Nine",
    description: truncateText("La vie quotidienne d'un groupe de détectives excentriques travaillant dans le 99e commissariat de Brooklyn.", 155),
  };
}

export default function BrooklynNineNinePage() {
  return (
    <MediaDetail />
  );
}
