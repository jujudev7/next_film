import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film 5150, rue des Ormes",
    description: truncateText(
      "Yannick se retrouve séquestré par une famille qui vit selon un code moral très strict, dirigée par un père passionné par les échecs. Un duel psychologique s'engage.",
      155
    ),
  };
}

export default function film5150rueDesOrmesPage() {
  return <MediaDetail />;
}

