
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Calls",
    description: truncateText("Une série expérimentale qui raconte des histoires captivantes uniquement à travers des dialogues téléphoniques et des effets visuels minimalistes.", 155),
  };
}

export default function CallsPage() {
  return (
    <MediaDetail />
  );
}
