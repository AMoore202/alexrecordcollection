import RecommendationCard from "./RecommendationCard";
import MenuLink from "./MenuLink";
import { GithubIcon } from "./Icons";

export default function DesktopMenu() {
  return (
    <div className="hidden w-[450px] bg-[#151414] h-screen 2xl:flex flex-col border-r border-white/5">
      <div className="p-4 w-full border-b border-white/5">
        <h1 className="font-title text-white text-5xl">My Collection</h1>
      </div>
      <div className="w-full h-full p-4 flex flex-col justify-between">
        <RecommendationCard />
        <div className="flex flex-col w-full gap-1 py-4">
          <MenuLink
            href="https://github.com/AMoore202/alexrecordcollection"
            newTab
          >
            <GithubIcon className="size-4" />
            <span>Clone the Repo</span>
          </MenuLink>
        </div>
      </div>
    </div>
  );
}
