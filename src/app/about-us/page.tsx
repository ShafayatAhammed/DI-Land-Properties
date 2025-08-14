import type { FunctionComponent, JSX } from "react";
import TitleBox from "@/components/layout/title-box/title-box";
import History from "@/components/layout/about-us/history/history";
import Leadership from "@/components/layout/about-us/leadership/leadership";
import Office from "@/components/layout/office/office";
import WorkWithUs from "@/components/layout/about-us/work-with-us/work-with-us";

const AboutUs: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <TitleBox title="About Us" />
      <History />
      <Leadership />
      <div className="w-auto h-auto border-b-2 border-gray-200">
        <Office />
      </div>
      <WorkWithUs />
    </>
  );
};

export default AboutUs;
