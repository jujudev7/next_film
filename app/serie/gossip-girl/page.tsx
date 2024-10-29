
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Gossip Girl",
    description: truncateText("Les élèves privilégiés d'une école privée new-yorkaise voient leurs vies dévoilées par un mystérieux blogueur.", 155),
  };
}

export default function GossipGirlPage() {
  return (
    <MediaDetail />
  );
}
