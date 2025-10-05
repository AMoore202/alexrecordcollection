"use client";

import { useState, useMemo } from "react";
import RecommendationCard from "./components/ui/RecommendationCard";
import RecordResult from "./components/ui/RecordResult";
import { recordResultsList } from "./utils/RecordResultsList";
import { Input } from "./components/ui/input";
import { SearchIcon } from "./components/ui/Icons";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecords = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return recordResultsList.filter(
      (record) =>
        record.title.toLowerCase().includes(term) ||
        record.artist.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="flex">
      <div className="w-[500px] bg-[#151414] h-screen flex flex-col border-r border-white/5">
        <div className="p-4 w-full border-b border-white/5">
          <h1 className="font-title text-white text-5xl">My Collection</h1>
        </div>
        <div className="w-full p-4 flex flex-col justify-between">
          <RecommendationCard />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center px-8 py-10 overflow-y-scroll">
        <div className="w-full max-w-[1360px] flex flex-col gap-8">
          <div className="relative w-[250px]">
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
          </div>
          <div className="grid grid-cols-4 gap-12">
            {filteredRecords.map((record) => (
              <RecordResult
                key={record.id}
                imageString={record.imageString}
                title={record.title}
                artist={record.artist}
                year={record.year}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
