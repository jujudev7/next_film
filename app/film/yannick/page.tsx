
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Yannick",
    description: truncateText("En pleine représentation de la pièce « Le Cocu », un très mauvais boulevard, Yannick se lève et interrompt le spectacle pour reprendre la soirée en main...", 155),
  };
}

export default function YannickPage() {
  return (
    <MediaDetail />
  );
}
