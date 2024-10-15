
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Le Bureau des Légendes",
    description: truncateText("Les agents de la DGSE, la principale agence de renseignement française, mènent des missions sous couverture tout en jonglant avec les risques de leur double vie.", 155),
  };
}

export default function LeBureaudesLgendesPage() {
  return (
    <MediaDetail />
  );
}
