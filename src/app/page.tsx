"use client";

import { useState, useMemo } from "react";
import RecommendationCard from "./components/ui/RecommendationCard";
import RecordResult from "./components/ui/RecordResult";
import { recordResultsList } from "./utils/RecordResultsList";
import { Input } from "./components/ui/input";
import { SearchIcon, MailIcon } from "./components/ui/Icons";
import { Button } from "./components/ui/Button";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<"year" | "artist">("year");

  const filteredRecords = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return recordResultsList.filter(
      (record) =>
        record.title.toLowerCase().includes(term) ||
        record.artist.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const filteredRecordsCount = filteredRecords.length;
  const filteredArtistsCount = new Set(
    filteredRecords.map((record) => record.artist)
  ).size;

  const sortedRecords = [...filteredRecords].sort((a, b) =>
    sortBy === "artist"
      ? sortOrder === "asc"
        ? a.artist.localeCompare(b.artist)
        : b.artist.localeCompare(a.artist)
      : sortOrder === "asc"
      ? Number(a.year) - Number(b.year)
      : Number(b.year) - Number(a.year)
  );

  return (
    <div className="flex">
      <div className="w-[450px] bg-[#151414] h-screen flex flex-col border-r border-white/5">
        <div className="p-4 w-full border-b border-white/5">
          <h1 className="font-title text-white text-5xl">My Collection</h1>
        </div>
        <div className="w-full p-4 flex flex-col justify-between">
          <RecommendationCard />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center px-8 py-10">
        <div className="w-full max-w-[1360px] flex flex-col gap-8 h-full">
          <div className="flex w-full justify-between items-center px-6">
            <div className="relative w-[250px]">
              <Input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
            </div>
            <p className="font-sans font-medium text-white/50 text-sm px-2">
              {filteredRecordsCount} records, {filteredArtistsCount} artists
            </p>
          </div>
          {filteredRecordsCount === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-full pb-16">
              <div className="max-w-[300px] flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <h2 className="font-sans font-semibold text-white text-lg">
                    Damn, no record found.
                  </h2>
                  <p className="font-sans text-white/75 text-center font-base">
                    Looks like I don&apos;t have it yet - send me a note on what
                    I am missing.
                  </p>
                </div>
                <Button href="mailto:alexandermoore202@gmail.com">
                  <MailIcon />
                  <span>Recommend a Record</span>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-8 justify-items-center flex-1 overflow-y-auto scrollbar-hide">
              {sortedRecords.map((record) => (
                <RecordResult
                  key={record.id}
                  imageString={record.imageString}
                  title={record.title}
                  artist={record.artist}
                  year={record.year}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
