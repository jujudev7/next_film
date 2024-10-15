
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Man on Fire",
    description: truncateText("Dans un Mexique en proie à une vague d'enlèvements, l'ancien agent de la CIA John Creasy devient bodyguard de la petite Pita Ramos, fille d'un riche industriel. C'est alors qu'elle est kidnappée...", 155),
  };
}

export default function ManonFirePage() {
  return (
    <MediaDetail />
  );
}
