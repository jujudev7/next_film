
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Inside Man",
    description: truncateText("Un criminologue incarcéré aide à résoudre des enquêtes criminelles compliquées, tout en ayant ses propres motivations cachées.", 155),
  };
}

export default function InsideManPage() {
  return (
    <MediaDetail />
  );
}
