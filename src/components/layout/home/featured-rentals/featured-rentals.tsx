"use client";

import type { FunctionComponent, JSX } from "react";
import SectionHeader from "@/components/lib/home/section-header/section-header";
import FeaturedRentalsArea from "@/components/lib/home/featured-rentals/featured-rentals";
import Link from "next/link";

const FeaturedRentals: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-[#f0f4f7] px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="Properties For Rent"
          description="Search over 2000 properties to rent from the top agents in the country"
        />
        <div>
          <FeaturedRentalsArea />
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="bg-blue-1 px-[30px] py-[14px] rounded-md hover:bg-blue-2 transition-colors text-white text-base xl-2xl:text-xl"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRentals;
