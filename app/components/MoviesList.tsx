import React from "react";
import MovieCard from "./MovieCard";

type Movie = {
  title: string;
  year: string;
  poster: string;
};

type MoviesListProps = {
  movies: Movie[];
};

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          year={movie.year}
          poster={movie.poster}
        />
      ))}
    </div>
  );
};

export default MoviesList;
