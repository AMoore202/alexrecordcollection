import { RecordSide } from "@/app/utils/types";

export default function TrackListSide({
  sideData,
  highlightColour,
}: {
  sideData: RecordSide;
  highlightColour: string;
}) {
  return (
    <div className="flex flex-col w-full p-4 gap-4">
      <h3 className="font-sans text-2xl font-medium text-white/50 w-full border-b border-white/10 pb-2">
        Side {sideData.side}
      </h3>
      {sideData.tracks.map((track) => (
        <div key={track.number} className="flex font-sans gap-3 items-center">
          <span
            style={{ color: highlightColour }}
            className="w-5 font-medium text-sm text-center"
          >
            {track.number}
          </span>
          <span className="text-white text-lg font-bold">{track.title}</span>
        </div>
      ))}
    </div>
  );
}
