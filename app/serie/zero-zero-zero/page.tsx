
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie ZeroZeroZero",
    description: truncateText("Un thriller international qui suit le parcours complexe d'une cargaison de cocaïne, de son expédition jusqu'à sa livraison, en explorant les enjeux mondiaux du trafic de drogue. La série a été tournée au Mexique, en Italie, au Sénégal, au Maroc et aux États-Unis.", 155),
  };
}

export default function ZeroZeroZeroPage() {
  return (
    <MediaDetail />
  );
}
