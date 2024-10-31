
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film D.A.R.Y.L.",
    description: truncateText("Un jeune garçon doté de capacités extraordinaires découvre qu'il est en fait un androïde créé par les militaires.", 155),
  };
}

export default function DARYLPage() {
  return (
    <MediaDetail />
  );
}
