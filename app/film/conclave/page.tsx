import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Conclave",
    description: truncateText(
      "Après la mort du pape, le Collège des cardinaux se réunit en conclave pour élire un nouveau pontife. Des intrigues politiques et des secrets personnels émergent alors...",
      155
    ),
  };
}

export default function ConclavePage() {
  return <MediaDetail />;
}

