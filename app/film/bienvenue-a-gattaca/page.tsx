
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Bienvenue à Gattaca",
    description: truncateText("Dans un futur où l'eugénisme est la norme, Vincent Freeman, un homme né naturellement, rêve de voyager dans l'espace. Pour cela, il doit déjouer le système en usurpant l'identité d'un individu génétiquement parfait.", 155),
  };
}

export default function BienvenueGattacaPage() {
  return (
    <MediaDetail />
  );
}
