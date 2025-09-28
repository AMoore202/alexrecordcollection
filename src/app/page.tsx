import RecommendationCard from "./ui/RecommendationCard";
import RecordResult from "./ui/RecordResult";
import { recordResultsList } from "./utils/RecordResultsList";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[500px] bg-[#151414] h-screen flex flex-col border-r border-white/5">
        <div className="p-4 w-full border-b border-white/5">
          <h1 className="font-title text-white text-5xl">My Collection</h1>
        </div>
        <div className="w-full p-4 flex flex-col justify-between">
          <RecommendationCard />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center p-8">
        <div className="w-full max-w-[1360px] flex flex-col gap-4">
          <div className="flex flex-wrap gap-10">
            {recordResultsList.map((record) => (
              <RecordResult
                key={record.id}
                imageString={record.imageString}
                title={record.title}
                artist={record.artist}
                year={record.year}
              />
            ))}
          </div>
        </div>
        {/* 

          <div className="flex flex-wrap gap-10">
            <RecordResult
              imageString="/alligator.webp"
              title="Alligator"
              artist="The National"
              year="2005"
            />
            <RecordResult
              imageString="/alligator.webp"
              title="Alligator"
              artist="The National"
              year="2005"
            />
            <RecordResult
              imageString="/alligator.webp"
              title="Alligator"
              artist="The National"
              year="2005"
            />
            <RecordResult
              imageString="/alligator.webp"
              title="Alligator"
              artist="The National"
              year="2005"
            />
            <RecordResult
              imageString="/alligator.webp"
              title="Alligator"
              artist="The National"
              year="2005"
            />
            <RecordResult
              imageString="/alligator.webp"
              title="Alligator"
              artist="The National"
              year="2005"
            />
            <RecordResult
              imageString="/alligator.webp"
              title="Alligator"
              artist="The National"
              year="2005"
            /> */}
      </div>
    </div>
  );
}
