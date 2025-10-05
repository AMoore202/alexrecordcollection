import Image from "next/image";
import { RecordResultProps } from "../../utils/types";

export default function RecordResult({
  imageString,
  title,
  artist,
  year,
}: RecordResultProps) {
  return (
    <div className="flex flex-col items-center gap-3 w-[294px]">
      <div className="relative">
        <Image
          src={imageString}
          alt={`${title} album cover`}
          width={276}
          height={276}
          className="blur-[5px] opacity-10 z-0"
        />
        <Image
          src={imageString}
          alt={`${title} album cover`}
          width={262}
          height={262}
          className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h2 className="font-sans text-2xl font-semibold text-center">
          {title}
        </h2>
        <p className="w-full font-sans text-white font-light text-base text-center">
          {artist} &#183; {year}
        </p>
      </div>
    </div>
  );
}
