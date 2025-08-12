import type { FunctionComponent, JSX } from "react";
import Hero from "@/components/layout/home/hero/hero";
import FeaturedListings from "@/components/layout/home/featured-listings/featured-listings";
import ApartmentTypes from "@/components/layout/home/apartment-types/apartment-types";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <ApartmentTypes />
    </>
  );
};

export default Home;
