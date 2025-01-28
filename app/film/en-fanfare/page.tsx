import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film En Fanfare",
    description: truncateText(
      "Dans un village turc, cinq sœurs orphelines sont élevées par leur grand-mère et leur oncle qui leur impose des règles strictes pour préserver leur honneur, transformant progressivement leur maison en prison. Les sœurs cherchent alors des moyens d'échapper à cette oppression.",
      155
    ),
  };
}

export default function EnFanfarePage() {
  return <MediaDetail />;
}

