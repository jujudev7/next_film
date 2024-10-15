
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film BAC Nord",
    description: truncateText("Dans les quartiers sensibles de Marseille, trois policiers spécialisés dans la lutte contre le trafic de drogue tentent de résoudre une affaire qui va bouleverser leur vie.", 155),
  };
}

export default function BACNordPage() {
  return (
    <MediaDetail />
  );
}
