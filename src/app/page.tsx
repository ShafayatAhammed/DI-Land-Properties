import type { FunctionComponent, JSX } from "react";
import Hero from "@/components/layout/home/hero/hero";
import FeaturedListings from "@/components/layout/home/featured-listings/featured-listings";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Hero />
      <FeaturedListings />
    </>
  );
};

export default Home;
