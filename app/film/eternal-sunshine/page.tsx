
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Eternal Sunshine of the Spotless Mind",
    description: truncateText("L'histoire d'amour touche à sa fin entre Clementine et Joel. Ce dernier décide de faire appel à une société pour supprimer Clementine de sa mémoire. Les souvenirs commencent à défiler...", 155),
  };
}

export default function EternalSunshineoftheSpotlessMindPage() {
  return (
    <MediaDetail />
  );
}
