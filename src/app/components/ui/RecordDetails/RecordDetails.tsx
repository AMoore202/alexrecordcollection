"use client";

import Image from "next/image";
import Record from "./Record";
import Description from "./Description";
import TrackListSide from "./TrackListSide";
import { CloseIcon } from "../Icons";
import { RecordResultProps } from "@/app/utils/types";
import { recordResultsList } from "@/app/utils/RecordResultsList";

interface RecordDetailsProps {
  albumId: number;
  onClose: () => void;
}

export default function RecordDetails({
  albumId,
  onClose,
}: RecordDetailsProps) {
  const albumData = recordResultsList.find(
    (album) => album.id === albumId
  ) as RecordResultProps;

  return (
    <div className="absolute left-0 top-0 z-50 w-full h-screen flex flex-col items-center bg-[#191818] xl:pt-10 pt-5 overflow-y-scroll scrollbar-hide">
      <button
        className="absolute top-6 right-10 flex items-center z-20 p-2 rounded-lg hover:bg-white/[0.04] transition duration-100 cursor-pointer"
        onClick={onClose}
      >
        <CloseIcon className="text-[#C4C4C4] size-10" />
      </button>
      <div className="w-full max-w-[1100px] flex flex-col xl:gap-10 gap-4 h-full px-4">
        <div className="flex items-center gap-12">
          <div className="flex items-center w-1/2">
            <div className="size-[320px] aspect-square relative mr-[-120px] shadow-[4px_0_4px_0_rgba(0,0,0,0.25)]">
              <Image
                src={albumData.imageString}
                alt={`${albumData.title} album cover`}
                fill
              />
            </div>
            <Record
              colour={albumData.recordColour || ""}
              innerColour={albumData.innerColour || ""}
              lineColour={albumData.recordLineColour || "white"}
            />
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
        <div className="grid grid-cols-2 gap-8 pb-8">
          {albumData.sides?.map((side) => (
            <TrackListSide
              key={side.side}
              sideData={side}
              highlightColour={albumData.recordHighlightColour || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
