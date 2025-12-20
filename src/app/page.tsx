"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DesktopMenu from "./components/ui/DesktopMenu";
import MobileMenu from "./components/ui/MobileMenu";
import RecordResult from "./components/ui/RecordResult";
import { recordResultsList } from "./utils/RecordResultsList";
import { MailIcon } from "./components/ui/Icons";
import { Button } from "./components/ui/Button";
import FilterBar from "./components/ui/FilterBar";
import RecordDetails from "./components/ui/RecordDetails/RecordDetails";

function RecordCover({
  imageString,
  title,
}: {
  imageString: string;
  title: string;
}) {
  return (
    <motion.div
      layoutId={`image-${imageString}`}
      transition={{ duration: 0.3, bounce: 0, type: "spring" }}
      className="w-full h-full aspect-square"
    >
      <Image
        src={imageString}
        alt={`${title} album cover`}
        fill
        sizes="(max-width: 768px) 148px, 262px"
        className="z-10"
      />
    </motion.div>
  );
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<"year" | "artist">("year");
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);

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

  const handleSortOrderToggle: () => void = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleSortByChange: (value: "year" | "artist") => void = (value) => {
    setSortBy(value);
  };

  const handleSortItemPress: (
    newSortBy: "year" | "artist",
    newSortOrder: "asc" | "desc"
  ) => void = (newSortBy, newSortOrder) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  const handleRecordClick: (albumId: number) => void = (albumId) => {
    setSelectedAlbumId(albumId);
    setShowOverlay(true);
  };

  return (
    <div className="relative flex 2xl:flex-row flex-col h-screen overflow-hidden">
      <DesktopMenu />
      <MobileMenu />
      <div className="relative w-full h-screen flex flex-col items-center xl:pt-10 pt-5 z-0 min-h-0">
        {showOverlay && selectedAlbumId !== null && (
          <RecordDetails
            albumId={selectedAlbumId}
            onClose={() => setShowOverlay(false)}
            albumCover={
              <RecordCover
                imageString={
                  recordResultsList.find(
                    (album) => album.id === selectedAlbumId
                  )?.imageString || ""
                }
                title={
                  recordResultsList.find(
                    (album) => album.id === selectedAlbumId
                  )?.title || ""
                }
              />
            }
          />
        )}
        <div className="w-full max-w-[1360px] flex flex-col xl:gap-8 gap-4 h-full px-4 min-h-0">
          <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortOrder={sortOrder}
            sortBy={sortBy}
            handleSortOrderToggle={handleSortOrderToggle}
            handleSortByChange={handleSortByChange}
            handleSortItemPress={handleSortItemPress}
            filteredRecordsCount={filteredRecordsCount}
            filteredArtistsCount={filteredArtistsCount}
          />
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
                  <MailIcon className="text-[#C4C4C4]" />
                  <span>Recommend a Record</span>
                </Button>
              </div>
            </div>
          ) : (
            <div className="overflow-y-auto scrollbar-hide pt-2 flex-1 min-h-0">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 sm:gap-4 gap-2 justify-items-center pb-30 lg:pb-10">
                {sortedRecords.map((record) => (
                  <button
                    key={record.id}
                    onClick={() => handleRecordClick(record.id)}
                    className="cursor-pointer h-fit"
                  >
                    <RecordResult
                      key={record.id}
                      id={record.id}
                      imageString={record.imageString}
                      title={record.title}
                      artist={record.artist}
                      year={record.year}
                      recordCover={
                        <RecordCover
                          imageString={record.imageString}
                          title={record.title}
                        />
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
