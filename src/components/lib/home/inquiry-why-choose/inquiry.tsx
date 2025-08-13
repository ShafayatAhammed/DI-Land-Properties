import type { FunctionComponent, JSX } from "react";
import SectionHeader from "../section-header/section-header";
import InquiryForm from "@/components/ui/home/inquiry-why-choose/inquiry-form";

const Inquiry: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <div className="text-center md:text-start">
        <SectionHeader title="Inquiry Form" />
      </div>
      <InquiryForm />
    </div>
  );
};

export default Inquiry;
