
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Mindhunter",
    description: truncateText("Dans les années 1970, deux agents du FBI interviewent des tueurs en série pour comprendre leur psychologie et améliorer les méthodes d'enquête.", 155),
  };
}

export default function MindhunterPage() {
  return (
    <MediaDetail />
  );
}
