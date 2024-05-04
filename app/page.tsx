import Header from "@/components/Header";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import GridContainer from "@/components/grid-container";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4 w-full h-screen">
      <div className="z-10 w-full max-w-5xl flex justify-between font-mono text-sm lg:flex h-auto">
        <Header />
      </div>

      <div className="flex gap-4 h-full w-full">
        <GridContainer />
      </div>

    </main >
  );
}
