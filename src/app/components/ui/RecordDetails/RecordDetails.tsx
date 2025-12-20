"use client";

import { motion } from "framer-motion";
import Record from "./Record";
import Description from "./Description";
import TrackListSide from "./TrackListSide";
import { CloseIcon } from "../Icons";
import { RecordResultProps } from "@/app/utils/types";
import { recordResultsList } from "@/app/utils/RecordResultsList";

interface RecordDetailsProps {
  albumId: number;
  onClose: () => void;
  albumCover?: React.ReactNode;
}

export default function RecordDetails({
  albumId,
  onClose,
  albumCover,
}: RecordDetailsProps) {
  const albumData = recordResultsList.find(
    (album) => album.id === albumId
  ) as RecordResultProps;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute left-0 top-0 z-50 w-full h-screen flex flex-col items-center bg-[#191818] xl:pt-10 pt-5 overflow-y-scroll scrollbar-hide"
    >
      <button
        className="fixed top-24 lg:top-10 right-4 lg:right-10 flex items-center z-20 p-2 rounded-lg hover:bg-white/[0.04] transition duration-100 cursor-pointer"
        onClick={onClose}
      >
        <CloseIcon className="text-[#C4C4C4] size-10" />
      </button>
      <div className="w-full max-w-[1100px] flex flex-col xl:gap-10 gap-4 px-4">
        <div className="flex flex-col lg:flex-row items-start p-4 lg:items-center gap-8 lg:gap-12">
          <div className="relative w-1/2">
            <Record
              colour={albumData.recordColour || ""}
              innerColour={albumData.innerColour || ""}
              lineColour={albumData.recordLineColour || "white"}
            />
            <motion.div
              initial={{ boxShadow: "4px 0 4px 0 rgba(0,0,0,0)" }}
              animate={{ boxShadow: "4px 0 4px 0 rgba(0,0,0,0.25)" }}
              transition={{ duration: 0.1, delay: 0.3 }}
              className="absolute top-0 mr-[-120px] size-[200px] lg:size-[320px] aspect-square shadow-[4px_0_4px_0_rgba(0,0,0,0.25)]"
            >
              {albumCover}
            </motion.div>
          </div>
          <Description
            artist={albumData.artist}
            colour={albumData.recordColour || ""}
            colourDescription={albumData.recordColourDescription || ""}
            title={albumData.title}
            year={albumData.year}
            recordNumber={albumData.recordNumber || 0}
            speed={albumData.speed || ""}
            musicians={albumData.musicians || ""}
            description={albumData.description || ""}
            highlightColor={albumData.recordHighlightColour || ""}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2 mb-40">
          {albumData.sides?.map((side) => (
            <TrackListSide
              key={side.side}
              sideData={side}
              highlightColour={albumData.recordHighlightColour || ""}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
