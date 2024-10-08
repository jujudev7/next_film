import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GiTv } from "react-icons/gi";
import { MdLocalMovies } from "react-icons/md";

type SortProps = {
  onSortChange: (category: string) => void; // Ajouter une prop pour la fonction de changement
};

export function Sort({ onSortChange }: SortProps) {
  return (
    <Select onValueChange={onSortChange}>
      <SelectTrigger className="w-[180px] bg-slate-200 text-lg">
        <SelectValue placeholder="Trier par..." />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem className="text-lg font-bold" value="all">
            Trier par...
          </SelectItem>
          <SelectItem
            className="flex items-center justify-between text-lg"
            value="films"
          >
            <span className="flex items-center gap-3">
              Films
              <MdLocalMovies />
            </span>
          </SelectItem>
          <SelectItem
            className="flex items-center justify-between text-lg"
            value="series"
          >
            <span className="flex items-center gap-2">
              Séries
              <GiTv />
            </span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
