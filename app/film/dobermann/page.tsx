
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Dobermann",
    description: truncateText("Le Dobermann et son gang défraient la chronique. En face d'eux, un flic quelque peu pourri. Une anthologie du braquage, un best-of du hold-up !", 155),
  };
}

export default function DobermannPage() {
  return (
    <MediaDetail />
  );
}
