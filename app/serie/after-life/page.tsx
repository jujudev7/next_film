
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie After Life",
    description: truncateText("Tony, dévasté par la mort de sa femme, adopte une nouvelle attitude brutale envers la vie et les autres, mais ses amis et collègues essaient de l'aider à retrouver un sens.", 155),
  };
}

export default function AfterLifePage() {
  return (
    <MediaDetail />
  );
}
