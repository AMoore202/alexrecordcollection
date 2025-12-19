import Link from "next/link";

interface MenuLinkProps {
  href?: string;
  children?: React.ReactNode;
  newTab?: boolean;
}

export default function MenuLink({
  href,
  children,
  newTab = false,
}: MenuLinkProps) {
  return (
    <Link
      href={href || ""}
      target={newTab ? "_blank" : "_self"}
      className="flex items-center px-3 py-2 w-full gap-2 rounded-lg text-white/50 font-sans hover:bg-[#272525]/25 border border-transparent hover:border-[#272525]/50 hover:text-white/80 transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none cursor-pointer"
    >
      {children}
    </Link>
  );
}
