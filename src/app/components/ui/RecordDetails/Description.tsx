function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-sm text-white/50 font-bold">
      {children}
    </span>
  );
}

function Value({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-lg text-white font-medium">{children}</span>
  );
}

function LabelledValue({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-0.5 w-full">{children}</div>;
}

interface DescriptionProps {
  title: string;
  artist: string;
  recordNumber: number;
  colour: string;
  colourDescription: string;
  year: string;
  speed: string;
  musicians: string;
  description: string;
  highlightColor: string;
}

export default function Description({
  title,
  artist,
  recordNumber,
  colour,
  colourDescription,
  year,
  speed,
  musicians,
  description,
  highlightColor,
}: DescriptionProps) {
  return (
    <div className="flex flex-col gap-5 w-1/2">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-sans">
          <span style={{ color: highlightColor }} className="font-bold">
            {title}
          </span>
          <span className="font-light text-white ml-2">by {artist}</span>
        </h2>
        <p className="font-sans text-white/75 text-lg">
          Released in {year} as their {recordNumber} record
        </p>
      </div>
      <div className="flex gap-4">
        <LabelledValue>
          <Label>Colour</Label>
          <span>
            <Value>{colourDescription}</Value>
            <span className="font-sans text-lg text-white/50 font-medium ml-2">
              {colour}
            </span>
          </span>
        </LabelledValue>
        <LabelledValue>
          <Label>Speed</Label>
          <Value>{speed}</Value>
        </LabelledValue>
      </div>
      <LabelledValue>
        <Label>Musicians</Label>
        <Value>{musicians}</Value>
      </LabelledValue>
      <LabelledValue>
        <Label>Description</Label>
        <Value>{description}</Value>
      </LabelledValue>
    </div>
  );
}
