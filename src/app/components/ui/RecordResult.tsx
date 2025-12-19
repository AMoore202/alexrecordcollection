import { motion } from "framer-motion";
import Image from "next/image";
import { RecordResultProps } from "../../utils/types";
import useMeasure from "react-use-measure";

export default function RecordResult({
  imageString,
  title,
  artist,
  year,
}: RecordResultProps) {
  const [ref, bounds] = useMeasure();

  return (
    <motion.div
      layout="position"
      style={{ height: bounds.height }}
      className="md:min-h-[352px] min-h-[236px]"
      initial={{ opacity: 0, filter: "blur(5px)" }}
      animate={{ opacity: 1, filter: "blur(0px)", transition: { delay: 0.3 } }}
    >
      <div
        ref={ref}
        className="flex flex-col items-center md:gap-3 gap-1 w-[180px] md:w-[294px]"
      >
        <div className="relative">
          <div className="md:size-[276px] sm:size-[180px] size-[160px] aspect-square">
            <Image
              src={imageString}
              alt={`${title} album cover`}
              fill
              sizes="(max-width: 768px) 164px, 276px"
              className="blur-[5px] opacity-10 z-0 max-w-full h-auto"
            />
          </div>
          <div className="md:size-[262px] sm:size-[162px] size-[148px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square">
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
    </motion.div>
  );
}
