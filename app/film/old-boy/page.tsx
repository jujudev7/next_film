
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Old Boy",
    description: truncateText("Après avoir été kidnappé et emprisonné pendant 15 ans sans raison apparente, Oh Dae-su est libéré et cherche à comprendre qui est derrière son calvaire.", 155),
  };
}

export default function OldBoyPage() {
  return (
    <MediaDetail />
  );
}
