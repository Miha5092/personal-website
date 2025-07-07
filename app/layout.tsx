import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import NavigationBar from "./ui/navigationBar";
import BackToTopButton from "./ui/backToTopButton";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Website",
  description: "A personal website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-xs md:text-base xl:text-lg tracking-widest">
      <body className={inter.className}>
        <div className="grid grid-rows-[auto_1fr]">
          <NavigationBar height="h-12" spacing="px-4"/>
          {children}
          <BackToTopButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
