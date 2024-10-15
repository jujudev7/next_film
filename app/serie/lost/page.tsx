
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie LOST",
    description: truncateText("Les survivants d'un crash aérien sont coincés sur une île mystérieuse où des événements surnaturels bouleversent leur lutte pour la survie.", 155),
  };
}

export default function LOSTPage() {
  return (
    <MediaDetail />
  );
}
