
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Melancholia",
    description: truncateText("Alors qu'une planète menaçante s'approche de la Terre, deux sœurs sont confrontées à des crises personnelles.", 155),
  };
}

export default function MelancholiaPage() {
  return (
    <MediaDetail />
  );
}
