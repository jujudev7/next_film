
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Mr. Robot",
    description: truncateText("Elliot, un jeune programmeur brillant mais instable, est recruté par un mystérieux groupe de hackers pour détruire une grande corporation corrompue.", 155),
  };
}

export default function MrRobotPage() {
  return (
    <MediaDetail />
  );
}
