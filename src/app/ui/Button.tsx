import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, children, className }: Readonly<ButtonProps>) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center rounded-lg p-4 gap-2 text-sans text-base text-white font-sans font-medium bg-[#272525] hover:bg-[#201E1E] active:scale-98 transition-transform shadow-[0_0.5px_1px_0_rgba(255,255,255,0.05)_inset,0_8px_16px_-8px_rgba(0,0,0,0.15),0_2px_4px_-2px_rgba(0,0,0,0.15),0_4px_8px_-4px_rgba(0,0,0,0.15)] ${
        className ?? ""
      }`}
    >
      {children}
    </Link>
  );
}
