// "use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GiTv } from "react-icons/gi";
import { MdLocalMovies } from "react-icons/md";

export function Sort() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-slate-200 text-lg">
        <SelectValue placeholder="Trier par..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-base">Trier par...</SelectLabel>
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
            <span className="flex items-center gap-3">
              Séries
              <GiTv />
            </span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
