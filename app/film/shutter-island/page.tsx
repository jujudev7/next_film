
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Shutter Island",
    description: truncateText("Un marshal enquête sur la disparition d'une patiente dans un hôpital psychiatrique isolé, révélant des secrets troublants sur l'île.", 155),
  };
}

export default function ShutterIslandPage() {
  return (
    <MediaDetail />
  );
}
