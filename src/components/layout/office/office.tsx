import type { FunctionComponent, JSX } from "react";
import OfficeDetails from "@/components/lib/office/office-details";
import OfficeMapView from "@/components/lib/office/office-map-view";

const Office: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 py-20 border-b-2 border-gray-200">
      <div className="mx-auto max-w-[1536px] flex flex-col lg-xl-2:flex-row gap-[60px] lg-xl-2:items-center">
        <OfficeDetails />
        <OfficeMapView />
      </div>
    </section>
  );
};

export default Office;
