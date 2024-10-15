
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Cuisine et Dépendances",
    description: truncateText("Lors d'un dîner, les tensions montent entre amis alors que de vieilles histoires refont surface, le tout dans la cuisine exiguë de l'hôte.", 155),
  };
}

export default function CuisineetDpendancesPage() {
  return (
    <MediaDetail />
  );
}
