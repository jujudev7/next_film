
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie OVNI(s)",
    description: truncateText("Dans les années 1970, un ingénieur est recruté par une équipe gouvernementale secrète pour enquêter sur les apparitions d'OVNIs en France.", 155),
  };
}

export default function OVNIsPage() {
  return (
    <MediaDetail />
  );
}
