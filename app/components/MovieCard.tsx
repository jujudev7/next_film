// app/components/MovieCard.tsx

import Image from "next/image";

type MovieCardProps = {
  title: string;
  year: number;
  poster: string;
};

const MovieCard = ({ title, year, poster }: MovieCardProps) => {
  return (
    <div className="border border-black p-4 mx-auto bg-white rounded-xl shadow-md hover:scale-110 hover:bg-rougevif my-2 hover:text-slate-100">
      <Image
        src={`/posters/${poster}`}
        alt={`Affiche de ${title}`}
        width={270}
        height={360}
        priority={true}
        className="rounded mx-auto"
      />
      <div className="max-w-[270px] flex flex-row justify-between items-start text-xl mt-4">
        {" "}
        <h2 className=" font-bold">{title}</h2>
        <p className="ml-1">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
