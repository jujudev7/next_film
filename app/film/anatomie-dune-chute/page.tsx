
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Anatomie d'une chute",
    description: truncateText("Sandra, Samuel et leur fils malvoyant de 11 ans, Daniel, vivent depuis un an à la montagne. Un jour, Samuel est retrouvé mort. On assiste au procès de la mère, véritable dissection du couple.", 155),
  };
}

export default function AnatomiedunechutePage() {
  return (
    <MediaDetail />
  );
}
