
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Argo",
    description: truncateText("Pendant la révolution iranienne, un agent de la CIA met au point une mission risquée pour libérer six otages en se faisant passer pour une équipe de tournage de film.", 155),
  };
}

export default function ArgoPage() {
  return (
    <MediaDetail />
  );
}
