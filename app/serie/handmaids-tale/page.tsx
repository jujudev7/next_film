
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie The Handmaid’s Tale",
    description: truncateText("Dans une société dystopique où les femmes fertiles sont réduites à l'esclavage pour la reproduction, une servante tente de résister.", 155),
  };
}

export default function TheHandmaidsTalePage() {
  return (
    <MediaDetail />
  );
}
