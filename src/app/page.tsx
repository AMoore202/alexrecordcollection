import RecommendationCard from "./ui/RecommendationCard";

export default function Home() {
  return (
    <div className="w-[400px] bg-[#151414] h-screen flex flex-col border-r border-white/5">
      <div className="p-4 w-full border-b border-white/5">
        <h1 className="font-title text-white text-4xl/[48px]">My Collection</h1>
      </div>
      <div className="w-full p-4 flex flex-col justify-between">
        <RecommendationCard />
      </div>
    </div>
  );
}
