import type { FunctionComponent, JSX } from "react";
import type { ListingType as Listing } from "@/lib/types/listing/types";
import ListingToolbar from "@/components/layout/listing/listing-toolbar/listing-toolbar";
import ListingFilters from "@/components/layout/listing/listing-filters/listing-filters";
import ListingCard from "@/components/ui/listing/listing-area/listing-card";

const Listing: FunctionComponent = (): JSX.Element => {
  const listings: Listing[] = [
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Luxury villa in Hermosillo",
      price: "$350,000",
      discountPrice: "$300,000",
      beds: 2,
      baths: 1,
      built: 2015,
      parkings: 0,
    },
  ];

  return (
    <>
      <ListingToolbar />
      <section className="bg-white pb-20 px-[17px] sm:px-7 md:px-14 xl:px-28">
        <div className="mx-auto max-w-[1536px] lg-xl-2:grid lg-xl-2:grid-cols-4">
          <div className="hidden lg-xl-2:block relative">
            <div className="border border-gray-300 py-6 px-4 mr-8 sticky top-0 left-0">
              <ListingFilters area="sidebar" />
            </div>
          </div>
          <div className="col-span-3 mt-10 grid xs-2:grid-cols-2 md-lg:grid-cols-3 gap-4">
            {listings.map(
              (
                {
                  bannerSrc,
                  title,
                  price,
                  discountPrice,
                  beds,
                  baths,
                  built,
                  parkings,
                },
                index
              ): JSX.Element => {
                return (
                  <ListingCard
                    key={index}
                    bannerSrc={bannerSrc}
                    title={title}
                    price={price}
                    discountPrice={discountPrice}
                    beds={beds}
                    baths={baths}
                    built={built}
                    parkings={parkings}
                  />
                );
              }
            )}
            <div className="xs-2:col-span-2 md-lg:col-span-3 flex justify-center">
              <button
                type="button"
                className="bg-blue-1 rounded-lg hover:bg-blue-2 transition-colors text-white py-3 px-20 cursor-pointer text-[15px] xl-2xl:text-[17px] outline-none"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
