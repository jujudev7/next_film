"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import movies from "../data/movies-infos";
import series from "../data/series-infos";
import Logo from "./Logo";

type Media = {
  title: string;
  year: number;
  duration: string;
  poster: string;
  category: string;
  synopsis: string;
  seasons: number;
  episodes: number;
};

const MediaDetail = () => {
  const router = useRouter();
  const [media, setMedia] = useState<Media | null>(null);

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const mediaPosterFileName = pathSegments[pathSegments.length - 1];
    const mediaPosterName = mediaPosterFileName.split(".")[0];

    const foundMedia = [...movies, ...series].find(
      (m) => m.poster.split(".")[0] === mediaPosterName
    );

    if (foundMedia) {
      setMedia(foundMedia);
    } else {
      router.push("/404");
    }
  }, [router]);

  if (!media) return <div>Loading...</div>;

  return (
    <div className="max-w-[1200px] mx-auto pt-2">
      <div className="mx-4">
        <div className="flex flex-row justify-between items-center">
          <Logo />
          <Link href="/">
            <Button className="flex items-center justify-center px-4 py-2 mr-3 text-black bg-slate-300 rounded transition hover:text-white hover:bg-blue-700">
              Accueil
              <IoHome className="ml-2" />
            </Button>
          </Link>
        </div>
        <div className="max-w-[800px] mx-auto mt-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Conteneur d'image avec dimensions fixes */}
            <div className="w-full sm:w-[300px] flex-shrink-0">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={`/posters/${media.poster}`}
                  alt={`Affiche de ${media.title}`}
                  fill
                  className="object-cover rounded-lg ring-1 ring-white hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority={true}
                />
              </div>
            </div>
            <div className="text-white flex-grow">
              <h1 className="text-4xl font-bold mb-4">{media.title}</h1>
              {media.category === "film" && (
                <div className="flex flex-row my-6 gap-3">
                  <Button className="flex items-center justify-center cursor-default px-8 py-6 text-lg text-white bg-blue-700 rounded hover:bg-blue-700">
                    Sortie :{" "}
                    <span className="font-bold ml-2">{media.year}</span>
                  </Button>
                  <Button className="flex items-center justify-center cursor-default px-8 py-6 text-lg text-black bg-orange-500 rounded hover:bg-orange-500">
                    Durée :{" "}
                    <span className="font-bold ml-2">{media.duration}</span>
                  </Button>
                </div>
              )}
              <p className="text-lg my-6">{media.synopsis}</p>

              {media.category === "serie" && (
                <div className="flex flex-row my-6 gap-4">
                  <Button className="flex items-center justify-center cursor-default px-12 py-7 text-lg text-white bg-blue-700 rounded hover:bg-blue-700">
                    <span className="font-bold text-3xl mr-2">
                      {media.seasons}
                    </span>
                    {media.seasons <= 1 ? "Saison" : "Saisons"}
                  </Button>
                  <Button className="flex items-center justify-center cursor-default px-12 py-7 text-lg text-black bg-orange-500 rounded hover:bg-orange-500">
                    <span className="font-bold text-3xl mr-2">
                      {media.episodes}
                    </span>
                    Épisodes
                  </Button>
                </div>
              )}
              <div>
                <span className="kalam-bold text-2xl text-orange-500 my-2">
                  Acteurs principaux :
                </span>
                <br />
                <span className="text-lg mb-8">{media.actors.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetail;
