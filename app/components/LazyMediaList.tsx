import { useEffect, useRef, useState } from "react";
import MediaCard from "./MediaCard"; // Importer le composant MediaCard

type Media = {
  title: string;
  year: number;
  poster: string;
  category: string;
};

type LazyMediaListProps = {
  media: Media[];
};

const LazyMediaList = ({ media }: LazyMediaListProps) => {
  const [visibleItems, setVisibleItems] = useState(4); // Nombre d'items à afficher initialement
  const observerRef = useRef<IntersectionObserver | null>(null); // Observer ref

  const lastElementRef = useRef<HTMLDivElement>(null); // Ref pour l'élément final

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const lastEntry = entries[0];
          if (lastEntry.isIntersecting) {
            // Si l'élément est visible, charger plus de cartes
            setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
          }
        },
        { threshold: 0.1 } // Commence à charger lorsque 10% de l'élément est visible
      );
    }

    const currentObserver = observerRef.current;
    const lastElement = lastElementRef.current; // Crée une copie locale de la valeur du ref

    // Si le dernier élément est observé, démarrer l'observation
    if (lastElement && currentObserver) {
      currentObserver.observe(lastElement);
    }

    return () => {
      // Utiliser la valeur locale dans la fonction de nettoyage
      if (lastElement && currentObserver) {
        currentObserver.unobserve(lastElement);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {media.slice(0, visibleItems).map((item, index) => (
        <MediaCard
          key={index}
          title={item.title}
          year={item.year}
          poster={item.poster}
          category={item.category}
        />
      ))}
      <div ref={lastElementRef} className="h-2"></div>
    </div>
  );
};

export default LazyMediaList;
