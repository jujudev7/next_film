import Image from "next/image";
import MoviesList from "./components/MoviesList";
import { Sort } from "./components/Sort";
import movies from "./data/movies-infos";

export default function Home() {
  return (
    <main className="max-w-1400 w-3/5 sm:w-full mx-auto pt-2">
      <div className="mx-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl text-center font-bold mb-6">
            <Image
              src={"/nextfilm_logo.svg"}
              alt={"Nextfilm logo"}
              width={300}
              height={94}
              className="ml-4 sm:ml-0 hover:scale-105"
              priority={true}
            />
          </h1>
          <Sort />
        </div>
        <MoviesList movies={movies} />
      </div>
    </main>
  );
}
