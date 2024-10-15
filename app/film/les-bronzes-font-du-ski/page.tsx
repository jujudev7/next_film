
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "film Les Bronzés font du ski",
    description: truncateText("Les Bronzés se retrouvent à la montagne pour des vacances au ski, où gaffes et mésaventures vont s'enchaîner dans cette comédie culte.", 155),
  };
}

export default function LesBronzsfontduskiPage() {
  return (
    <MediaDetail />
  );
}
