
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Le Silence des Agneaux",
    description: truncateText("Pour les besoins d'une enquête, Clarice Starling (FBI) décide de rencontrer le Dr Hannibal Lecter, détenu pour cannibalisme. Entre eux s'établit un lien de fascination/répulsion...", 155),
  };
}

export default function LeSilencedesAgneauxPage() {
  return (
    <MediaDetail />
  );
}
