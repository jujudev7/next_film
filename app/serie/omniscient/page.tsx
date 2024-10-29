
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Omniscient",
    description: truncateText("Dans une ville où les citoyens sont surveillés en permanence par des drones, une jeune femme enquête sur un meurtre que les autorités ont ignoré.", 155),
  };
}

export default function OmniscientPage() {
  return (
    <MediaDetail />
  );
}
