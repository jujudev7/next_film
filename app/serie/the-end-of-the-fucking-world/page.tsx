
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie The End of the F***ing World",
    description: truncateText("Un adolescent persuadé d'être un psychopathe se lie d'amitié avec une camarade de classe. Ensemble, ils partent dans un voyage imprévisible.", 155),
  };
}

export default function TheEndoftheFingWorldPage() {
  return (
    <MediaDetail />
  );
}
