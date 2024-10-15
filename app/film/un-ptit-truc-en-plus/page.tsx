import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Un p'tit truc en plus",
    description: truncateText(
      "En cavale après un braquage raté, Paulo et son père se cachent dans une colonie de vacances pour jeunes en situation de handicap, en se faisant passer pour un pensionnaire et son éducateur. Au fil des jours, ils vivent une expérience humaine bouleversante qui les transforme profondément.",
      155
    ),
  };
}

export default function UnPtitTrucEnPlusPage() {
  return <MediaDetail />;
}

