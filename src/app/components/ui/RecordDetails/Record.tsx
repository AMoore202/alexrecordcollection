import { clsx } from "clsx";

interface RecordProps {
  colour: string;
  innerColour: string;
}

interface RingProps {
  children: React.ReactNode;
  last?: boolean;
}

function Ring({ children, last = false }: RingProps) {
  return (
    <div
      className={clsx(
        "flex w-full h-full rounded-full border-[0.5px] p-0.5 border-white/10",
        { "p-1.5": last },
        { "p-0.5": !last }
      )}
    >
      {children}
    </div>
  );
}

function SongRings({ children }: { children: React.ReactNode }) {
  return (
    <Ring>
      <Ring>
        <Ring>
          <Ring>
            <Ring>
              <Ring>
                <Ring last={true}>{children}</Ring>
              </Ring>
            </Ring>
          </Ring>
        </Ring>
      </Ring>
    </Ring>
  );
}

export default function Record({ colour, innerColour }: RecordProps) {
  return (
    <div
      style={{ backgroundColor: colour }}
      className="flex size-[310px] rounded-full p-2"
    >
      <SongRings>
        <SongRings>
          <SongRings>
            <SongRings>
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
