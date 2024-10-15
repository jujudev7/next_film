
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Mystic River",
    description: truncateText("Trois amis d'enfance se retrouvent à la suite d'un meurtre dans leur quartier, ce qui fait ressurgir des traumatismes du passé.", 155),
  };
}

export default function MysticRiverPage() {
  return (
    <MediaDetail />
  );
}
