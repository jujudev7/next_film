
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Drôle",
    description: truncateText("Quatre comédiens en herbe tentent de percer dans le stand-up parisien, jonglant entre succès et échecs personnels.", 155),
  };
}

export default function DrlePage() {
  return (
    <MediaDetail />
  );
}
