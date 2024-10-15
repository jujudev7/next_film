
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Je verrai toujours vos visages",
    description: truncateText("Ce film retrace le parcours de plusieurs individus engagés dans une démarche de justice restaurative, où victimes et auteurs de crimes se rencontrent.", 155),
  };
}

export default function JeverraitoujoursvosvisagesPage() {
  return (
    <MediaDetail />
  );
}
