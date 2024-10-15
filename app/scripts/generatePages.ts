import { promises as fs } from "fs";
import * as path from "path";
import { Movie } from "../data/movies-infos";
import { Serie } from "../data/series-infos";

// Import dynamique des données
async function getData() {
  const moviesModule = await import("../data/movies-infos");
  const seriesModule = await import("../data/series-infos");
  return {
    movies: moviesModule.default as Movie[],
    series: seriesModule.default as Serie[],
  };
}

// Fonction pour créer le dossier parent si nécessaire
const ensureDirectoryExists = async (filePath: string) => {
  const dirname = path.dirname(filePath);
  try {
    await fs.access(dirname);
  } catch {
    await fs.mkdir(dirname, { recursive: true });
  }
};

// Fonction pour créer un fichier avec le contenu spécifié
const createFile = async (filePath: string, content: string) => {
  await ensureDirectoryExists(filePath);
  await fs.writeFile(filePath, content, { encoding: "utf8" });
  console.log(`Created: ${filePath}`);
};

// Fonction pour obtenir le nom du dossier à partir du nom du fichier poster
const getFolderName = (posterName: string) => {
  return posterName.replace(/\.(jpg|webp)$/, "").toLowerCase();
};

// Fonction pour générer le contenu des pages
const generatePageContent = (
  title: string,
  synopsis: string,
  category: string
) => {
  return `
import MediaDetail from "@/app/components/MediaDetail";
import type { Metadata } from "next";

// Fonction pour tronquer le texte
const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Définir les métadonnées pour la page
export function generateMetadata(): Metadata {
  return {
    title: "${category} ${title}",
    description: truncateText("${synopsis}", 155),
  };
}

export default function ${title.replace(/[^a-zA-Z0-9]/g, "")}Page() {
  return (
    <MediaDetail />
  );
}
`;
};

const generatePages = async () => {
  const rootDir = process.cwd();
  const { movies, series } = await getData();

  // Créez les fichiers pour les films
  for (const movie of movies) {
    const safeFolderName = getFolderName(movie.poster);
    const moviePath = path.join(
      rootDir,
      "app",
      "film",
      safeFolderName,
      "page.tsx"
    );
    const movieContent = generatePageContent(
      movie.title,
      movie.synopsis,
      "film"
    );
    await createFile(moviePath, movieContent);
  }

  // Créez les fichiers pour les séries
  for (const serie of series) {
    const safeFolderName = getFolderName(serie.poster);
    const seriePath = path.join(
      rootDir,
      "app",
      "serie",
      safeFolderName,
      "page.tsx"
    );
    const serieContent = generatePageContent(
      serie.title,
      serie.synopsis,
      "serie"
    );
    await createFile(seriePath, serieContent);
  }

  console.log("All files created successfully!");
};

// Appel de la fonction principale
generatePages().catch(console.error);
