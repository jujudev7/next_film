
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie La Petite Fille sous la neige",
    description: truncateText("Une journaliste déterminée enquête sur la disparition mystérieuse d'une petite fille, révélant des secrets profondément enfouis.", 155),
  };
}

export default function LaPetiteFillesouslaneigePage() {
  return (
    <MediaDetail />
  );
}
