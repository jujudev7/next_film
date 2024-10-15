
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Vol au-dessus d'un nid de coucou",
    description: truncateText("Dans un hôpital psychiatrique des années 1960, les traitements infligés aux patients posent questions... Une œuvre intense dont on ne sort pas indemne !", 155),
  };
}

export default function VolaudessusdunniddecoucouPage() {
  return (
    <MediaDetail />
  );
}
