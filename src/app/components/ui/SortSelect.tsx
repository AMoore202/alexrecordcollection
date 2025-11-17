import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectGroup,
  SelectValue,
} from "@/app/components/ui/select";
import { SortAscIcon, SortDescIcon } from "./Icons";

interface SortSelectProps {
  sortOrder: "asc" | "desc";
  sortBy: "year" | "artist";
  handleSortOrderToggle: () => void;
  handleSortByChange: (value: "year" | "artist") => void;
}

export default function SortSelect({
  sortOrder,
  sortBy,
  handleSortByChange,
  handleSortOrderToggle,
}: SortSelectProps) {
  return (
    <div className="relative hidden md:flex items-center">
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 p-1 rounded-sm hover:bg-[#242323] hover:cursor-pointer"
        onClick={handleSortOrderToggle}
      >
        {sortOrder === "asc" ? (
          <SortAscIcon className="size-4.5" />
        ) : (
          <SortDescIcon className="size-4.5" />
        )}
      </button>
      <Select
        defaultValue="year"
        value={sortBy}
        onValueChange={handleSortByChange}
      >
        <SelectTrigger className="w-[180px] text-white/50 font-sans">
          <div className="flex items-center gap-2 h-full pl-7">
            <div className="w-[1px] h-full bg-[#898888]/25"></div>
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="font-sans text-white/50 font-semibold">
              Sort By
            </SelectLabel>
            <SelectItem value="year">Release Year</SelectItem>
            <SelectItem value="artist">Artist</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
