
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie Altered Carbon",
    description: truncateText("Dans un futur où les humains peuvent transférer leur conscience dans de nouveaux corps, un mercenaire est chargé de résoudre un meurtre complexe.", 155),
  };
}

export default function AlteredCarbonPage() {
  return (
    <MediaDetail />
  );
}
