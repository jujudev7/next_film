
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Premier Contact",
    description: truncateText("Quand des extraterrestres arrivent sur Terre, une linguiste est chargée d'établir un premier contact. Elle doit décoder leur langage avant qu'une guerre éclate.", 155),
  };
}

export default function PremierContactPage() {
  return (
    <MediaDetail />
  );
}
