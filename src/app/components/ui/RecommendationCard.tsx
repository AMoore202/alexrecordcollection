import { Button } from "./Button";
import { MailIcon } from "./Icons";

export default function RecommendationCard() {
  return (
    <div className="flex flex-col w-full bg-[#191818] rounded-2xl p-3 gap-3">
      <div className="flex flex-col w-full px-2 py-3 gap-4">
        <h3 className="font-sans text-white text-xl font-stretch-semi-expanded font-semibold">
          Something I&#39;m Missing?
        </h3>
        <p className="font-sans text-white/75 text-sm">
          I am always looking to add my collection. Shoot me a message on what
          you think should be my next add!
        </p>
      </div>
      <Button href="mailto:alexandermoore202@gmail.com" className="w-full">
        <MailIcon />
        <span>Recommend a Record</span>
      </Button>
    </div>
  );
}
