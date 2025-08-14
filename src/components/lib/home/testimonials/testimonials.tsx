"use client";

import { type FunctionComponent, type JSX, useRef, RefObject } from "react";
import SwiperType from "swiper";
import type { TestimonialsType as TestimonialType } from "@/lib/types/home/types";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Testimonial from "@/components/ui/home/testimonials/testimonial";
import CarouselButton from "@/components/ui/home/carousel-button/carousel-button";

const Testimonials: FunctionComponent = (): JSX.Element => {
  const swiperRef: RefObject<SwiperType | null> = useRef<SwiperType | null>(
    null
  );

  const testimonials: TestimonialType[] = [
    {
      picSrc: "/client-1.jpg",
      name: "David S. Morris",
      position: "CEO at Entavo LLC",
      review:
        "HomePress WP comes up with results that are actually implementable. That is their strength compared to other consulting companies.",
    },
    {
      picSrc: "/client-2.jpg",
      name: "Maria E. Flynn",
      position: "Manager at ColdHawk Inc.",
      review:
        "It’s ideal for business clients who simply prefer to pay for transactions only as incurred. They help managing your time so you’ll get more done.",
    },
    {
      picSrc: "/client-3.jpg",
      name: "Dalmar Johnson",
      position: "Founder of WebFlex Inc.",
      review:
        "We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job Training program and other employer.",
    },
  ];

  return (
    <>
      <Swiper
        onSwiper={(swiper: SwiperType): void => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        slidesPerView={2}
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
        {testimonials.map(({ picSrc, name, position, review }): JSX.Element => {
          return (
            <SwiperSlide key={name} className="mb-20 cursor-grab">
              <Testimonial
                picSrc={picSrc}
                name={name}
                position={position}
                review={review}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute bottom-5 z-50 w-full flex justify-between">
        <CarouselButton name="prev" swiperRef={swiperRef} />
        <CarouselButton name="next" swiperRef={swiperRef} />
      </div>
    </>
  );
};

export default Testimonials;
