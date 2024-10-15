
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie No Man's Land",
    description: truncateText("Un jeune homme rejoint un groupe de combattantes kurdes en Syrie pour retrouver sa sœur présumée morte, et découvre la brutalité du conflit.", 155),
  };
}

export default function NoMansLandPage() {
  return (
    <MediaDetail />
  );
}
