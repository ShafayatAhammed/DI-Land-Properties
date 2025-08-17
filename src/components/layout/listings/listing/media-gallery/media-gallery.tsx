"use client";

import { type FunctionComponent, type JSX, useRef, RefObject } from "react";
import SwiperType from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import CarouselButton from "@/components/ui/home/carousel-button/carousel-button";

const MediaGallery: FunctionComponent = () => {
  const swiperRef: RefObject<SwiperType | null> = useRef<SwiperType | null>(
    null
  );

  return (
    <div className="relative">
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
        className="z-40"
      >
        <SwiperSlide>
          <div className="w-auto h-auto relative">
            <Image
              src="/hero-banner-3.jpg"
              alt="Listing Banner"
              width={1152}
              height={648}
              className="w-full aspect-[16/11] xs-2:aspect-[16/9]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-auto h-auto relative">
            <Image
              src="/hero-banner-3.jpg"
              alt="Listing Banner"
              width={1152}
              height={648}
              className="w-full aspect-[16/11] xs-2:aspect-[16/9]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-auto h-auto relative">
            <Image
              src="/hero-banner-3.jpg"
              alt="Listing Banner"
              width={1152}
              height={648}
              className="w-full aspect-[16/11] xs-2:aspect-[16/9]"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-auto z-40 flex justify-between items-center px-4">
        <CarouselButton name="prev" swiperRef={swiperRef} />
        <CarouselButton name="next" swiperRef={swiperRef} />
      </div>
    </div>
  );
};

export default MediaGallery;
