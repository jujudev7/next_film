
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie The OA",
    description: truncateText("Une jeune femme réapparaît après avoir disparu pendant plusieurs années, prétendant avoir des pouvoirs surnaturels et une mission mystérieuse à accomplir.", 155),
  };
}

export default function TheOAPage() {
  return (
    <MediaDetail />
  );
}
