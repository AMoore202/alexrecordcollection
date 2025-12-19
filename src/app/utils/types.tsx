// export type RecordResultProps = {
//   id?: number;
//   imageString: string;
//   title: string;
//   artist: string;
//   year: string;
// };

export type Track = {
  number: string;
  title: string;
};

export type RecordSide = {
  side: string;
  tracks: Track[];
};

export type RecordResultProps = {
  id?: number;
  imageString: string;
  title: string;
  artist: string;
  year: string;
  recordNumber?: number;
  recordColour?: string;
  recordColourDescription?: string;
  recordHighlightColour?: string;
  innerColour?: string;
  recordLineColour?: "white" | "black";
  speed?: "33 ⅓ RPM" | "45 RPM";
  musicians?: string;
  description?: string;
  sides?: RecordSide[];
};
