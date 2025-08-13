import type { FunctionComponent, JSX } from "react";
import Hero from "@/components/layout/home/hero/hero";
import FeaturedListings from "@/components/layout/home/featured-listings/featured-listings";
import ApartmentTypes from "@/components/layout/home/apartment-types/apartment-types";
import PropertiesForRent from "@/components/layout/home/properties-for-rent/properties-for-rent";
import InquiryWhyChoose from "@/components/layout/home/inquiry-why-choose/inquiry-why-choose";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <ApartmentTypes />
      <PropertiesForRent />
      <InquiryWhyChoose />
    </>
  );
};

export default Home;
