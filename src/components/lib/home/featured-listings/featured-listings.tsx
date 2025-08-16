"use client";

import { type FunctionComponent, type JSX, useRef, RefObject } from "react";
import SwiperType from "swiper";
import type { ShowcaseType as FeaturedListingType } from "@/lib/types/home/types";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import FeaturedListing from "@/components/ui/home/showcase-card/showcase-card";
import CarouselButton from "@/components/ui/home/carousel-button/carousel-button";

const FeaturedListings: FunctionComponent = (): JSX.Element => {
  const swiperRef: RefObject<SwiperType | null> = useRef<SwiperType | null>(
    null
  );

  const featuredListings: Omit<FeaturedListingType, "section">[] = [
    {
      bannerSrc: "/carousel-banner-1.jpg",
      title: "Awesome Family Homesdfjlsdjflsjfljsdfsdfsad",
      beds: 12,
      baths: 12,
      sqft: 12002,
      price: "$450,0002",
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
      bannerSrc: "/carousel-banner-4.jpg",
      title: "Studio on Compton",
      beds: 4,
      baths: 3,
      sqft: 5200,
      price: "$380,000",
      listingUrl: "/",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper: SwiperType): void => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          660: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        slidesPerView={3}
        spaceBetween={15}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="z-40"
      >
        {featuredListings.map(
          ({
            bannerSrc,
            title,
            beds,
            baths,
            sqft,
            price,
            listingUrl,
          }): JSX.Element => {
            return (
              <SwiperSlide key={title} className="mb-10">
                <FeaturedListing
                  bannerSrc={bannerSrc}
                  title={title}
                  beds={beds}
                  baths={baths}
                  sqft={sqft}
                  price={price}
                  listingUrl={listingUrl}
                  section="carousel"
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>

      <div className="absolute top-1/2 -translate-y-1/2 z-40 w-full flex items-center">
        <div className="absolute -left-2">
          <CarouselButton name="prev" swiperRef={swiperRef} />
        </div>
        <div className="absolute -right-2">
          <CarouselButton name="next" swiperRef={swiperRef} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
