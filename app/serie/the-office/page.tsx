
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie The Office",
    description: truncateText("La vie quotidienne au bureau de la société Dunder Mifflin, dirigée par l'excentrique Michael Scott, qui cultive le malaise comme personne auprès de ses employés aussi attachants qu'hilarants.", 155),
  };
}

export default function TheOfficePage() {
  return (
    <MediaDetail />
  );
}
