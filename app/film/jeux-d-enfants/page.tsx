
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Jeux d'Enfants",
    description: truncateText("Deux amis d'enfance jouent à un jeu de défis toujours plus risqués, jusqu'à ce que leur amour se retrouve en jeu.", 155),
  };
}

export default function JeuxdEnfantsPage() {
  return (
    <MediaDetail />
  );
}
