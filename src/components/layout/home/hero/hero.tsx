import type { FunctionComponent, JSX } from "react";
import Slide from "@/components/lib/home/hero/slide";

const Hero: FunctionComponent = (): JSX.Element => {
  return (
    <main className="mt-[81px] sm:mt-[84px] lg-xl:mt-[83px] xl-2xl:mt-[88px] w-auto h-auto relative">
      <Slide />
    </main>
  );
};

export default Hero;
