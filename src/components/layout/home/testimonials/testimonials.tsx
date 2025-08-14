import type { FunctionComponent, JSX } from "react";
import SectionHeader from "@/components/lib/home/section-header/section-header";
import TestimonialsArea from "@/components/lib/home/testimonials/testimonials";

const Testimonials: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px] relative">
        <div className="text-center">
          <SectionHeader title="Our Client Says" />
        </div>
        <div className="mt-20">
          <TestimonialsArea />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
