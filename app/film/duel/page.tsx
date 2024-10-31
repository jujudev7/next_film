
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Duel",
    description: truncateText("Un homme est traqué par un mystérieux camionneur qui semble décidé à le tuer, sur une route désertique.", 155),
  };
}

export default function DuelPage() {
  return (
    <MediaDetail />
  );
}
