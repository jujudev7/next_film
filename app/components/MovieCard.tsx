// app/components/MovieCard.tsx

import Image from "next/image";

type MovieCardProps = {
  title: string;
  year: number;
  poster: string;
};

const MovieCard = ({ title, year, poster }: MovieCardProps) => {
  return (
    <div className="border border-black p-4 bg-white rounded-xl shadow-md hover:scale-110 hover:bg-rougevif my-2 hover:text-slate-100">
      <Image
        src={poster}
        alt={`Affiche de ${title}`}
        width={300}
        height={400}
        priority={true}
        className="rounded"
      />
      <div className="flex flex-row justify-between items-start text-xl mt-4">
        {" "}
        <h2 className=" font-bold">{title}</h2>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
