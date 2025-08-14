import type { FunctionComponent, JSX } from "react";
import type { ShowcaseType as FeaturedRentalType } from "@/lib/types/home/types";
import FeaturedRental from "@/components/ui/home/showcase-card/showcase-card";

const FeaturedRentals: FunctionComponent = (): JSX.Element => {
  const featuredRentals: Omit<FeaturedRentalType, "section">[] = [
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
      {featuredRentals.map(
        (
          { bannerSrc, title, beds, baths, sqft, price, listingUrl },
          index
        ): JSX.Element => {
          return (
            <FeaturedRental
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

export default FeaturedRentals;
