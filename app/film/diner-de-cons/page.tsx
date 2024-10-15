
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Le Dîner de Cons",
    description: truncateText("Pierre Brochant et ses amis organisent un dîner où chacun doit amener un con. Mais son invité, Francois Pignon, passionné de modèles réduits en allumettes, va enchaîner les catastrophes...", 155),
  };
}

export default function LeDnerdeConsPage() {
  return (
    <MediaDetail />
  );
}
