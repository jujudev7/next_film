
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Memento",
    description: truncateText("Leonard n'a qu'une idée en tête : traquer l'homme qui a assassiné sa femme afin de se venger. Sa recherche du meurtrier est rendue plus difficile en raison de son incurable amnésie.", 155),
  };
}

export default function MementoPage() {
  return (
    <MediaDetail />
  );
}
