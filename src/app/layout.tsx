import type { Metadata } from "next";
import { Inter, Iceland } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const iceland = Iceland({
  variable: "--font-iceland",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Alex Record Collection",
  description: "A virtual copy of my personal record collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${iceland.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
