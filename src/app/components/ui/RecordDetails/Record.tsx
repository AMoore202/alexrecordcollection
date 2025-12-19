import { clsx } from "clsx";

interface RecordProps {
  colour: string;
  innerColour: string;
  lineColour?: "white" | "black";
}

interface RingProps {
  children: React.ReactNode;
  last?: boolean;
  lineColour?: "white" | "black";
}

function Ring({ children, last = false, lineColour = "white" }: RingProps) {
  return (
    <div
      className={clsx(
        "flex w-full h-full rounded-full border-[0.5px] p-0.5",
        { "p-1.5": last },
        { "p-0.5": !last },
        { "border-black/10": lineColour === "black" },
        { "border-white/10": lineColour === "white" }
      )}
    >
      {children}
    </div>
  );
}

function SongRings({
  children,
  lineColour = "white",
}: {
  children: React.ReactNode;
  lineColour?: "white" | "black";
}) {
  return (
    <Ring lineColour={lineColour}>
      <Ring lineColour={lineColour}>
        <Ring lineColour={lineColour}>
          <Ring lineColour={lineColour}>
            <Ring lineColour={lineColour}>
              <Ring lineColour={lineColour}>
                <Ring lineColour={lineColour} last={true}>
                  {children}
                </Ring>
              </Ring>
            </Ring>
          </Ring>
        </Ring>
      </Ring>
    </Ring>
  );
}

export default function Record({
  colour,
  innerColour,
  lineColour = "white",
}: RecordProps) {
  return (
    <div
      style={{ backgroundColor: colour }}
      className="flex size-[310px] rounded-full p-2"
    >
      <SongRings lineColour={lineColour}>
        <SongRings lineColour={lineColour}>
          <SongRings lineColour={lineColour}>
            <SongRings lineColour={lineColour}>
              <div className="flex w-full h-full rounded-full p-1">
                <div
                  style={{ backgroundColor: innerColour }}
                  className="flex w-full h-full bg-white rounded-full items-center justify-center"
                >
                  <div
                    style={{ backgroundColor: colour }}
                    className="size-2.5 rounded-full"
                  />
                </div>
              </div>
            </SongRings>
          </SongRings>
        </SongRings>
      </SongRings>
    </div>
  );
}
