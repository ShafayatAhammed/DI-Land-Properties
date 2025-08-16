import type { FunctionComponent, JSX } from "react";
import Slide from "@/components/lib/home/hero/slide";

const Hero: FunctionComponent = (): JSX.Element => {
  return (
    <main className="w-auto h-auto relative">
      <Slide />
    </main>
  );
};

export default Hero;
