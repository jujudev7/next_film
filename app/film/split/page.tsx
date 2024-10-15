
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Split",
    description: truncateText("Kevin, atteint de trouble dissociatif de l'identité, possède 23 personnalités différentes. L'une d'entre elles prend le contrôle et kidnappe trois adolescentes.", 155),
  };
}

export default function SplitPage() {
  return (
    <MediaDetail />
  );
}
