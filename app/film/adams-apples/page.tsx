
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Adam's Apples",
    description: truncateText("Un néo-nazi est envoyé dans une église rurale pour effectuer des travaux d'intérêt général. Il se retrouve confronté à un prêtre optimiste, malgré de nombreux obstacles.", 155),
  };
}

export default function AdamsApplesPage() {
  return (
    <MediaDetail />
  );
}
