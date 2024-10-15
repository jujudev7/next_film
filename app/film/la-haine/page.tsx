
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film La Haine",
    description: truncateText("Une émeute oppose les jeunes d'une cité HLM aux forces de l'ordre. Pour 3 d'entre eux, ces heures vont marquer un tournant dans leur vie...", 155),
  };
}

export default function LaHainePage() {
  return (
    <MediaDetail />
  );
}
