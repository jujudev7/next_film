import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Riverboom",
    description: truncateText(
      "En 2002, trois jeunes reporters de guerre entreprennent un périple en voiture à travers l'Afghanistan post-11 septembre. Serge, un journaliste dévoué, Paolo, un photographe jovial, et Claude, un typographe suisse prudent, vivent une aventure qui changera leur vie à jamais. Vingt ans plus tard, les images de ce voyage refont surface, offrant un regard unique sur leur expérience.",
      155
    ),
  };
}

export default function RiverboomPage() {
  return <MediaDetail />;
}

