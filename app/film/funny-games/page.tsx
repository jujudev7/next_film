
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Funny Games",
    description: truncateText("Deux jeunes hommes prennent en otage une famille et les soumettent à des jeux sadiques, sans raison apparente.", 155),
  };
}

export default function FunnyGamesPage() {
  return (
    <MediaDetail />
  );
}
