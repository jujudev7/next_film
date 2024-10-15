
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Chernobyl",
    description: truncateText("Une dramatique reconstitution de l'explosion de la centrale nucléaire de Tchernobyl en 1986 et des conséquences désastreuses qui ont suivi.", 155),
  };
}

export default function ChernobylPage() {
  return (
    <MediaDetail />
  );
}
