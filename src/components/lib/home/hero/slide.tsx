"use client";

import { type FunctionComponent, type JSX, useRef, RefObject } from "react";
import SwiperType from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import SlideItem from "../../../../components/ui/home/hero/slide-item";
import SlideButton from "../../../../components/ui/home/hero/slide-button";

interface Slide {
  bannerUrl: string;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
  listingUrl: string;
}

const Slide: FunctionComponent = (): JSX.Element => {
  const swiperRef: RefObject<SwiperType | null> = useRef<SwiperType | null>(
    null
  );

  const slides: Slide[] = [
    {
      bannerUrl: "/hero-banner-1-2.jpg",
      title: "Awesome Family Home",
      beds: 281,
      baths: 287,
      sqft: 1200,
      price: "$450,000",
      listingUrl: "/",
    },
    {
      bannerUrl: "/hero-banner-1-2.jpg",
      title: "Studio on Grand Avenue",
      beds: 281,
      baths: 287,
      sqft: 1150,
      price: "$675,000",
      listingUrl: "/",
    },
    {
      bannerUrl: "/hero-banner-3.jpg",
      title: "Studio on lrvington",
      beds: 285,
      baths: 291,
      sqft: 1500,
      price: "$580,000",
      listingUrl: "/",
    },
  ];

  return (
    <>
      <Swiper
        onSwiper={(swiper: SwiperType): void => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={30}
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
        className="w-[100%_!important] h-[500px_!important] xl-2xl:h-[600px_!important] z-50"
      >
        {slides.map(
          ({
            bannerUrl,
            title,
            beds,
            baths,
            sqft,
            price,
            listingUrl,
          }): JSX.Element => {
            return (
              <SwiperSlide key={title}>
                <SlideItem
                  bannerUrl={bannerUrl}
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

      <div className="absolute bottom-0 left-0 w-full h-auto z-50 px-[17px] sm:px-7 md:px-14 xl:px-28 mb-10">
        <div className="flex justify-between items-center mx-auto max-w-[1536px]">
          <SlideButton name="prev" swiperRef={swiperRef} />
          <SlideButton name="next" swiperRef={swiperRef} />
        </div>
      </div>
    </>
  );
};

export default Slide;
