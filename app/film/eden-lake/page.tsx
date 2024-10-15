
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Eden Lake",
    description: truncateText("Un couple en vacances se retrouve traqué par un groupe d'adolescents violents dans une forêt isolée. La lutte pour la survie commence.", 155),
  };
}

export default function EdenLakePage() {
  return (
    <MediaDetail />
  );
}
