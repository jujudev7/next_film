
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Black Mirror",
    description: truncateText("Anthologie dystopique qui explore la relation entre l'humanité et la technologie à travers des histoires sombres et souvent inquiétantes.", 155),
  };
}

export default function BlackMirrorPage() {
  return (
    <MediaDetail />
  );
}
