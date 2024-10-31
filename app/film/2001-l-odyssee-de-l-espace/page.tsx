import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film 2001 : L'Odyssée de l'Espace",
    description: truncateText(
      "Des astronautes découvrent un monolithe mystérieux qui pourrait détenir les clés de l'évolution humaine.",
      155
    ),
  };
}

export default function film2001LOdysseedelEspacePage() {
  return <MediaDetail />;
}

