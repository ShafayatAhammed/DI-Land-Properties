import type { FunctionComponent, JSX } from "react";
import TitleBox from "@/components/layout/title-box/title-box";
import CompanyHistory from "@/components/layout/about-us/company-history/company-history";
import OurLeadership from "@/components/layout/about-us/our-leadership/our-leadership";
import Office from "@/components/layout/office/office";
import WorkingWithUs from "@/components/layout/about-us/working-with-us/working-with-us";

const AboutUs: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <TitleBox title="About Us" />
      <CompanyHistory />
      <OurLeadership />
      <div className="w-auto h-auto border-b-2 border-gray-200">
        <Office />
      </div>
      <WorkingWithUs />
    </>
  );
};

export default AboutUs;
