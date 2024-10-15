
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film C'est arrivé près de chez vous",
    description: truncateText("Un faux documentaire suit les méfaits d'un tueur en série charismatique, commentés par lui-même, dans une satire acerbe du voyeurisme.", 155),
  };
}

export default function CestarrivprsdechezvousPage() {
  return (
    <MediaDetail />
  );
}
