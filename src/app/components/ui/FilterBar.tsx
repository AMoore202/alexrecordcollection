import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Input } from "./input";
import SortSelect from "./SortSelect";
import {
  SearchIcon,
  FilterIcon,
  SortAscIcon,
  SortDescIcon,
  CloseIcon,
} from "./Icons";

interface SortItemProps {
  itemSortOrder: "asc" | "desc";
  itemSortBy: "year" | "artist";
  selectedSortOrder: "asc" | "desc";
  selectedSortBy: "year" | "artist";
  handleSortItemPress: (
    sortBy: "year" | "artist",
    sortOrder: "asc" | "desc"
  ) => void;
}

function SortItem({
  itemSortOrder,
  itemSortBy,
  selectedSortOrder,
  selectedSortBy,
  handleSortItemPress,
}: SortItemProps) {
  const itemTextMap = {
    year: {
      asc: "Oldest to newest",
      desc: "Newest to oldest",
    },
    artist: {
      asc: "A to Z",
      desc: "Z to A",
    },
  } as const;

  const itemText = itemTextMap[itemSortBy][itemSortOrder];

  const isSelected =
    itemSortOrder === selectedSortOrder && itemSortBy === selectedSortBy;

  return (
    <button
      onClick={() => handleSortItemPress(itemSortBy, itemSortOrder)}
      className={clsx(
        "flex items-center px-2 py-1.5 w-full gap-2 rounded-lg text-white/50 text-sm font-sans border transition-colors",
        {
          "border-transparent": !isSelected,
        },
        {
          "bg-[#272525]/25 border-[#272525]/50 text-white/80": isSelected,
        }
      )}
    >
      {itemSortOrder === "asc" ? (
        <SortAscIcon className="size-4" />
      ) : (
        <SortDescIcon className="size-4" />
      )}
      {itemText}
    </button>
  );
}

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortOrder: "asc" | "desc";
  sortBy: "year" | "artist";
  handleSortOrderToggle: () => void;
  handleSortByChange: (value: "year" | "artist") => void;
  handleSortItemPress: (
    sortBy: "year" | "artist",
    sortOrder: "asc" | "desc"
  ) => void;
  filteredRecordsCount: number;
  filteredArtistsCount: number;
}

export default function FilterBar({
  searchTerm,
  setSearchTerm,
  sortOrder,
  sortBy,
  handleSortOrderToggle,
  handleSortByChange,
  handleSortItemPress,
  filteredRecordsCount,
  filteredArtistsCount,
}: FilterBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setDrawerOpen(false);
      }
    }

    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerOpen]);

  return (
    <div className="relative flex flex-col md:flex-row w-full gap-2 md:justify-between md:items-center md:px-6">
      <div className="flex gap-2 items-center w-full md:w-auto">
        <div className="relative w-full md:w-[250px]">
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
        </div>
        <SortSelect
          sortOrder={sortOrder}
          sortBy={sortBy}
          handleSortByChange={handleSortByChange}
          handleSortOrderToggle={handleSortOrderToggle}
        />
        <button
          onClick={() => {
            setDrawerOpen(true);
          }}
          className="flex md:hidden items-center justify-center rounded-lg px-4 py-4 gap-3 text-sans text-base text-white font-sans font-medium bg-[#272525] hover:bg-[#201E1E] active:scale-98 transition-transform shadow-[0_0.5px_1px_0_rgba(255,255,255,0.05)_inset,0_8px_16px_-8px_rgba(0,0,0,0.15),0_2px_4px_-2px_rgba(0,0,0,0.15),0_4px_8px_-4px_rgba(0,0,0,0.15)]"
        >
          <FilterIcon />
        </button>
      </div>
      <p className="font-sans font-medium text-white/50 text-sm px-2">
        {filteredRecordsCount} records, {filteredArtistsCount} artists
      </p>
      <div
        className={clsx(
          "fixed z-50 left-0 top-0 h-screen w-full bg-black/50 flex flex-col justify-end backdrop-blur-xs transition-all duration-300",
          { "opacity-100 pointer-events-auto": drawerOpen },
          { "opacity-0 pointer-events-none": !drawerOpen }
        )}
      >
        <div
          ref={popoverRef}
          className={clsx(
            "z-60 w-full bg-[#151414] ring ring-white/25 rounded-t-3xl p-3 origin-bottom",
            { "opacity-100 scale-100 pointer-events-auto": drawerOpen },
            {
              "opacity-0 scale-96 pointer-events-none duration-300":
                !drawerOpen,
            }
          )}
        >
          <div className="mx-2 flex items-center justify-between border-b border-white/5 py-1">
            <h2 className="font-sans font-semibold text-white text-lg">
              Sort Order
            </h2>
            <button onClick={() => setDrawerOpen(false)}>
              <CloseIcon className="text-[#C4C4C4]" />
            </button>
          </div>
          <div className="flex flex-col gap-2 py-3">
            <div className="flex flex-col gap-0.5 py-1">
              <p className="text-xs text-white/75 font-medium px-2 mb-1">
                Release Year
              </p>
              <SortItem
                itemSortBy="year"
                itemSortOrder="asc"
                selectedSortBy={sortBy}
                selectedSortOrder={sortOrder}
                handleSortItemPress={handleSortItemPress}
              />
              <SortItem
                itemSortBy="year"
                itemSortOrder="desc"
                selectedSortBy={sortBy}
                selectedSortOrder={sortOrder}
                handleSortItemPress={handleSortItemPress}
              />
            </div>
            <div className="flex flex-col gap-0.5 py-1">
              <p className="text-xs text-white/75 font-medium px-2 mb-1">
                Artist
              </p>
              <SortItem
                itemSortBy="artist"
                itemSortOrder="asc"
                selectedSortBy={sortBy}
                selectedSortOrder={sortOrder}
                handleSortItemPress={handleSortItemPress}
              />
              <SortItem
                itemSortBy="artist"
                itemSortOrder="desc"
                selectedSortBy={sortBy}
                selectedSortOrder={sortOrder}
                handleSortItemPress={handleSortItemPress}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
