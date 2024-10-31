
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Le Grand Bleu",
    description: truncateText("Une plongée dans la rivalité entre deux apnéistes, Enzo et Jacques, explorant leur passion pour l'océan et leur amitié complexe.", 155),
  };
}

export default function LeGrandBleuPage() {
  return (
    <MediaDetail />
  );
}
