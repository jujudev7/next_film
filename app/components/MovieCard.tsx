import Image from "next/image";
import React from "react";

type MovieCardProps = {
  title: string;
  year: string;
  poster: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ title, year, poster }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        className="w-full h-96 object-cover"
        src={poster}
        alt={`${title} poster`}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
