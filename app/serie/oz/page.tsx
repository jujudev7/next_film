
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Oz",
    description: truncateText("Une plongée dans l'univers ultra-violent de la prison de haute sécurité d'Oswald State Correctional Facility. Drogue, règlements de comptes, sexualité...", 155),
  };
}

export default function OzPage() {
  return (
    <MediaDetail />
  );
}
