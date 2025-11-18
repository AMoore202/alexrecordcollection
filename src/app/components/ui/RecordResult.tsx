import Image from "next/image";
import { RecordResultProps } from "../../utils/types";

export default function RecordResult({
  imageString,
  title,
  artist,
  year,
}: RecordResultProps) {
  return (
    <div className="flex flex-col items-center gap-3 w-[180px] md:w-[294px]">
      <div className="relative">
        <div className="md:size-[276px] size-[180px]">
          <Image
            src={imageString}
            alt={`${title} album cover`}
            fill
            sizes="(max-width: 768px) 164px, 276px"
            className="blur-[5px] opacity-10 z-0 max-w-full h-auto"
          />
        </div>
        <div className="md:size-[262px] size-[162px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={imageString}
            alt={`${title} album cover`}
            fill
            sizes="(max-width: 768px) 148px, 262px"
            className="z-10"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 px-4">
        <h2 className="font-sans md:text-2xl text-xl font-semibold text-center">
          {title}
        </h2>
        <p className="w-full font-sans text-white font-light md:text-base text-sm text-center">
          {artist} &#183; {year}
        </p>
      </div>
    </div>
  );
}
