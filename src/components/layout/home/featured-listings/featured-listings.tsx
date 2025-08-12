import type { FunctionComponent, JSX } from "react";
import Carousel from "@/components/lib/home/featured-listings/carousel";

const FeaturedListings: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-[#f0f4f7] px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px]">
        <div className="text-center">
          <h2 className="text-[35px] xs:text-[40px] xl-2xl:text-[60px] text-primary-text leading-11 xl-2xl:leading-16">
            Discover Our Featured Listings
          </h2>
          <p className="text-[#434751] text-[17px] xl-2xl:text-xl mt-2">
            These featured listings contain exclusive real estate opportunities
            within the city
          </p>
        </div>
        <div className="mt-10">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
