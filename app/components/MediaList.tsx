import MediaCard from "./MediaCard";

type Media = {
  title: string;
  year: number;
  poster: string;
  category: string;
};

const MediaList = ({ media }: { media: Media[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {media.map((item, index) => (
        <MediaCard
          key={index}
          title={item.title}
          year={item.year}
          poster={item.poster}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default MediaList;
