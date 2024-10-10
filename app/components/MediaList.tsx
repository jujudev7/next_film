import MediaCard from "./MediaCard";

type Media = {
  title: string;
  year: number;
  poster: string;
};

type MediaListProps = {
  media: Media[];
};

const MediaList = ({ media }: MediaListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-3">
      {media.map((item, index) => (
        <MediaCard
          key={index}
          title={item.title}
          year={item.year}
          poster={item.poster}
        />
      ))}
    </div>
  );
};

export default MediaList;
