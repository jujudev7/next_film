
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "serie H",
    description: truncateText("Les mésaventures comiques d'une équipe médicale déjantée dans un hôpital parisien, où le chaos règne entre médecins, infirmières et personnel technique.", 155),
  };
}

export default function HPage() {
  return (
    <MediaDetail />
  );
}
