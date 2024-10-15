
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Peaky Blinders",
    description: truncateText("Dans l'Angleterre des années 1920, le gang des Peaky Blinders, reconnaissable à ses costumes et casquettes, excelle dans la criminalité, à l'instar de son chef charismatique Thomas Shelby.", 155),
  };
}

export default function PeakyBlindersPage() {
  return (
    <MediaDetail />
  );
}
