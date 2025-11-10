import { useState, useRef, useEffect } from "react";
import { HamburgerMenuIcon, GithubIcon, MailIcon } from "./Icons";
import MenuLink from "./MenuLink";
import clsx from "clsx";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative flex 2xl:hidden w-full justify-between bg-[#151414] border-b border-white/5 p-4 items-center">
      <h1 className="font-title text-white text-4xl/[48px]">My Collection</h1>
      <button
        onClick={handleMenuToggle}
        className="relative p-2 rounded-xl hover:bg-[#272525]/25 border border-transparent hover:border-[#272525]/50 text-white/50 hover:text-white/80"
      >
        <HamburgerMenuIcon />
      </button>
      <div
        className={clsx(
          "absolute right-4 w-[250px] bg-[#151414] z-10 flex flex-col items-center border border-white/5 rounded-2xl shadow-lg transition-all duration-200 ease-out",
          {
            "opacity-100 top-20 scale-100": isOpen,
            "opacity-0 top-18 scale-95": !isOpen,
          }
        )}
      >
        <div ref={popoverRef} className="flex flex-col w-full gap-1 p-2">
          <MenuLink
            href="https://github.com/AMoore202/alexrecordcollection"
            newTab
          >
            <GithubIcon className="size-4" />
            <span>Clone the Repo</span>
          </MenuLink>
          <MenuLink href="mailto:alexandermoore202@gmail.com">
            <MailIcon className="text-[#8A8A8A] size-4" />
            <span>Recommend a Record</span>
          </MenuLink>
        </div>
      </div>
    </div>
  );
}
