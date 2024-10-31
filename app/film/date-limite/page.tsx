
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Date Limite",
    description: truncateText("Un architecte embarque dans un voyage rocambolesque avec un acteur excentrique pour assister à la naissance de son enfant.", 155),
  };
}

export default function DateLimitePage() {
  return (
    <MediaDetail />
  );
}
