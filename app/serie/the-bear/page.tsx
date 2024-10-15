
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie The Bear",
    description: truncateText("Un jeune chef talentueux reprend la gestion de la sandwicherie familiale à Chicago, confronté aux défis financiers et personnels que cela implique.", 155),
  };
}

export default function TheBearPage() {
  return (
    <MediaDetail />
  );
}
