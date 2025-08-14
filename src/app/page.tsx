import type { FunctionComponent, JSX } from "react";
import Hero from "@/components/layout/home/hero/hero";
import FeaturedListings from "@/components/layout/home/featured-listings/featured-listings";
import Apartments from "@/components/layout/home/apartments/apartments";
import FeaturedRentals from "@/components/layout/home/featured-rentals/featured-rentals";
import GetStarted from "@/components/layout/home/get-started/get-started";
import Testimonials from "@/components/layout/home/testimonials/testimonials";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <Apartments />
      <FeaturedRentals />
      <GetStarted />
      <Testimonials />
    </>
  );
};

export default Home;
