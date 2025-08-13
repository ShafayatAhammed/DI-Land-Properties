import type { FunctionComponent, JSX } from "react";
import Inquiry from "@/components/lib/home/inquiry-why-choose/inquiry";
import WhyChoose from "@/components/lib/home/inquiry-why-choose/why-choose";

const InquiryWhyChoose: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px] grid md:grid-cols-2 gap-16">
        <Inquiry />
        <WhyChoose />
      </div>
    </section>
  );
};

export default InquiryWhyChoose;
