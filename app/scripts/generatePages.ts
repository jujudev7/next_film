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
  return posterName.replace(".jpg", "").toLowerCase();
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
    const movieContent = `
import MediaDetail from "@/app/components/MediaDetail";

export default function ${movie.title.replace(/[^a-zA-Z0-9]/g, "")}Page() {
  return <MediaDetail title="${movie.title}" />;
}
`;
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
    const serieContent = `
import MediaDetail from "@/app/components/MediaDetail";

export default function ${serie.title.replace(/[^a-zA-Z0-9]/g, "")}Page() {
  return <MediaDetail title="${serie.title}" />;
}
`;
    await createFile(seriePath, serieContent);
  }

  console.log("All files created successfully!");
};

// Appel de la fonction principale
generatePages().catch(console.error);
