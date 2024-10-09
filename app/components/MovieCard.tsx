// app/components/MovieCard.tsx

import Image from "next/image";

type MovieCardProps = {
  title: string;
  year: number;
  poster: string;
};

const MovieCard = ({ title, year, poster }: MovieCardProps) => {
  return (
    <div className="border border-black p-2 mx-auto my-2 rounded-lg shadow-md bg-white hover:scale-105 hover:bg-rougevif hover:text-slate-100 overflow-hidden">
      <Image
        src={`/posters/${poster}`}
        alt={`Affiche de ${title}`}
        width={220}
        height={330}
        className="rounded-lg"
        priority={true}
      />
      <div className="max-w-[220px] flex flex-row justify-between items-start mt-2">
        {" "}
        <h2 className="font-bold">{title}</h2>
        <p className="ml-1">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
