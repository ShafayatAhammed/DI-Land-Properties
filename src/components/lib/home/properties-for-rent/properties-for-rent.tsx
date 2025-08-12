import type { FunctionComponent, JSX } from "react";
import type { HeroFeatListingsPrptRentType as PropertyForRentType } from "@/lib/types/home/types";
import PropertyForRent from "@/components/ui/home/feat-listings-prpt-rent/feat-listings-prpt-rent-item";

const PropertiesForRent: FunctionComponent = (): JSX.Element => {
  const propertiesForRent: Omit<PropertyForRentType, "section">[] = [
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Awesome Family Home",
      beds: 1,
      baths: 1,
      sqft: 1200,
      price: "$450,000",
      listingUrl: "/",
    },
    {
      bannerSrc: "/carousel-banner-2.jpg",
      title: "Contemporary studio",
      beds: 1,
      baths: 1,
      sqft: 1300,
      price: "$250,000",
      listingUrl: "/",
    },
    {
      bannerSrc: "/carousel-banner-3.jpg",
      title: "Studio bay view",
      beds: 1,
      baths: 1,
      sqft: 4400,
      price: "$180,000",
      listingUrl: "/",
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Awesome Family Home",
      beds: 1,
      baths: 1,
      sqft: 1200,
      price: "$450,000",
      listingUrl: "/",
    },
    {
      bannerSrc: "/carousel-banner-2.jpg",
      title: "Contemporary studio",
      beds: 1,
      baths: 1,
      sqft: 1300,
      price: "$250,000",
      listingUrl: "/",
    },
    {
      bannerSrc: "/carousel-banner-3.jpg",
      title: "Studio bay view",
      beds: 1,
      baths: 1,
      sqft: 4400,
      price: "$180,000",
      listingUrl: "/",
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Awesome Family Home",
      beds: 1,
      baths: 1,
      sqft: 1200,
      price: "$450,000",
      listingUrl: "/",
    },
    {
      bannerSrc: "/carousel-banner-2.jpg",
      title: "Contemporary studio",
      beds: 1,
      baths: 1,
      sqft: 1300,
      price: "$250,000",
      listingUrl: "/",
    },
    {
      bannerSrc: "/carousel-banner-3.jpg",
      title: "Studio bay view",
      beds: 1,
      baths: 1,
      sqft: 4400,
      price: "$180,000",
      listingUrl: "/",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg-xl:[grid-template-columns:repeat(3,minmax(0,1fr))_!important] gap-8">
      {propertiesForRent.map(
        (
          { bannerSrc, title, beds, baths, sqft, price, listingUrl },
          index
        ): JSX.Element => {
          return (
            <PropertyForRent
              key={index}
              bannerSrc={bannerSrc}
              title={title}
              beds={beds}
              baths={baths}
              sqft={sqft}
              price={price}
              listingUrl={listingUrl}
              section="properties-for-rent"
            />
          );
        }
      )}
    </div>
  );
};

export default PropertiesForRent;
