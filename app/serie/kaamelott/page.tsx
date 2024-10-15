
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Kaamelott",
    description: truncateText("La quête du roi Arthur et des chevaliers de la Table ronde est revisitée sous un angle comique, mettant en lumière leurs échecs et mésaventures.", 155),
  };
}

export default function KaamelottPage() {
  return (
    <MediaDetail />
  );
}
