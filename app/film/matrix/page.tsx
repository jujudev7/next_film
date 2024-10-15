
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Matrix",
    description: truncateText("Dans un monde futuriste, un hacker nommé Neo rejoint une rébellion pour libérer l'humanité de l'emprise des intelligences artificielles...", 155),
  };
}

export default function MatrixPage() {
  return (
    <MediaDetail />
  );
}
