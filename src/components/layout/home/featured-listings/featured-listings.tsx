import type { FunctionComponent, JSX } from "react";
import SectionHeader from "@/components/lib/home/section-header/section-header";
import FeaturedListingsArea from "@/components/lib/home/featured-listings/featured-listings";

const FeaturedListings: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-[#f0f4f7] px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="Discover Our Featured Listings"
          description="These featured listings contain exclusive real estate opportunities
            within the city"
        />
        <div>
          <FeaturedListingsArea />
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
