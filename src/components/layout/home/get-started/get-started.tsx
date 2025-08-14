import type { FunctionComponent, JSX } from "react";
import Inquiry from "@/components/lib/home/get-started/inquiry";
import GetStartedArea from "@/components/lib/home/get-started/get-started";

const GetStarted: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px] grid md:grid-cols-2 gap-16">
        <Inquiry />
        <GetStartedArea />
      </div>
    </section>
  );
};

export default GetStarted;
