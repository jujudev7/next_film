// app/components/MediaDetail.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import movies from "../data/movies-infos";
import series from "../data/series-infos";

type Media = {
  title: string;
  year: number;
  poster: string;
  category: string;
  synopsis: string;
};

const MediaDetail = () => {
  const router = useRouter();
  const [media, setMedia] = useState<Media | null>(null);

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const mediaPosterFileName = pathSegments[pathSegments.length - 1]; // Dernier segment de l'URL

    // Supprimer l'extension du nom du fichier
    const mediaPosterName = mediaPosterFileName.split(".")[0];

    // Rechercher le média correspondant en comparant le nom du poster
    const foundMedia = [...movies, ...series].find(
      (m) => m.poster.split(".")[0] === mediaPosterName
    );

    if (foundMedia) {
      setMedia(foundMedia);
    } else {
      router.push("/404"); // Redirige vers une page 404 si le média n'est pas trouvé
    }
  }, [router]);

  if (!media) return <div>Loading...</div>; // Affiche un message de chargement pendant que le média est chargé

  return (
    <div className="max-w-[800px] mx-auto p-4">
      <h1 className="text-4xl text-white font-bold mb-4">{media.title}</h1>
      <div className="relative w-[300px] h-[450px]">
        <Image
          src={`/posters/${media.poster}`}
          alt={`Affiche de ${media.title}`}
          sizes="(max-width: 800px) 100vw, 300px"
          fill
          className="object-cover rounded-lg mb-4"
          priority={true}
        />
      </div>
      <p className="text-lg text-white">{media.synopsis}</p>
      <p className="text-sm text-gray-600">Année de sortie : {media.year}</p>
    </div>
  );
};

export default MediaDetail;
