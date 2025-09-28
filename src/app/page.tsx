import RecommendationCard from "./ui/RecommendationCard";
import RecordResult from "./ui/RecordResult";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[400px] bg-[#151414] h-screen flex flex-col border-r border-white/5">
        <div className="p-4 w-full border-b border-white/5">
          <h1 className="font-title text-white text-5xl">My Collection</h1>
        </div>
        <div className="w-full p-4 flex flex-col justify-between">
          <RecommendationCard />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col gap-4 p-8">
        <RecordResult
          imageString="/alligator.webp"
          title="Alligator"
          artist="The National"
          year="2005"
        />
      </div>
    </div>
  );
}
