import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie 3%",
    description: truncateText(
      "Dans un futur dystopique, la société est divisée en deux, et seulement 3% des jeunes sont admis dans le paradis utopique après des épreuves impitoyables.",
      155
    ),
  };
}

export default function serie3pourCentPage() {
  return <MediaDetail />;
}

