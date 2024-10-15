
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Hunger Games",
    description: truncateText("Dans un futur dystopique, Katniss Everdeen participe à un jeu télévisé où des adolescents s'affrontent dans une lutte à mort.", 155),
  };
}

export default function HungerGamesPage() {
  return (
    <MediaDetail />
  );
}
