
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie L'Effondrement",
    description: truncateText("Une série d'anthologie sur les conséquences de l'effondrement de la société moderne, abordant la survie dans un monde sans infrastructures.", 155),
  };
}

export default function LEffondrementPage() {
  return (
    <MediaDetail />
  );
}
