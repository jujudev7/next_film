import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Le Huitième Jour",
    description: truncateText(
      "Un homme d'affaires rencontre Georges, un homme trisomique, et cette rencontre bouleverse sa vie.",
      155
    ),
  };
}

export default function LeHuitiemeJourPage() {
  return <MediaDetail />;
}

