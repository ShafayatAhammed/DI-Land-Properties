import type { FunctionComponent, JSX } from "react";
import SectionHeader from "@/components/lib/home/section-header/section-header";
import ApartmentsArea from "@/components/lib/home/apartments/apartments";

const Apartments: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="Explore Apartment Types"
          description="Explore all the different types of apartments so you can choose the best option for you"
        />
        <div>
          <ApartmentsArea />
        </div>
      </div>
    </section>
  );
};

export default Apartments;
