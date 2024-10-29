
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Alice in Borderland",
    description: truncateText("Un jeune homme et ses amis se retrouvent dans un Tokyo désert, forcés de jouer à des jeux mortels pour survivre.", 155),
  };
}

export default function AliceinBorderlandPage() {
  return (
    <MediaDetail />
  );
}
