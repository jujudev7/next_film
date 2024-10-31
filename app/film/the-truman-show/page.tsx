
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film The Truman Show",
    description: truncateText("Truman Burbank découvre que sa vie est en fait une émission de télé-réalité, où il est filmé en permanence.", 155),
  };
}

export default function TheTrumanShowPage() {
  return (
    <MediaDetail />
  );
}
