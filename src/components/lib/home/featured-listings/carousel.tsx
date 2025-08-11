"use client";

import { type FunctionComponent, type JSX, useRef, RefObject } from "react";
import SwiperType from "swiper";
import useWindowWidth from "../../../../hooks/use-window-width";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselItem from "../../../../components/ui/home/featured-listings/carousel-item";
import CarouselButton from "../../../../components/ui/home/featured-listings/carousel-button";

interface Carousel {
  bannerSrc: string;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
  listingUrl: string;
}

const Carousel: FunctionComponent = (): JSX.Element => {
  const swiperRef: RefObject<SwiperType | null> = useRef<SwiperType | null>(
    null
  );

  const width = useWindowWidth();

  const carousels: Carousel[] = [
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
        slidesPerView={width < 660 ? 1 : width < 1024 ? 2 : 3}
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
        className="z-50"
      >
        {carousels.map(
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
                <CarouselItem
                  bannerSrc={bannerSrc}
                  title={title}
                  beds={beds}
                  baths={baths}
                  sqft={sqft}
                  price={price}
                  listingUrl={listingUrl}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>

      <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full flex items-center">
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

export default Carousel;
