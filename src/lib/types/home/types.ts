import type { RefObject } from "react";
import SwiperType from "swiper";

interface ShowcaseType {
  bannerSrc: string;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
  listingUrl: string;
  section: "carousel" | "properties-for-rent";
}

interface ApartmentsType {
  title: string;
  propertyCount: number;
  bannerSrc: string;
  propertiesUrl: string;
}

interface GetStartedType {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface TestimonialsType {
  picSrc: string;
  name: string;
  position: string;
  review: string;
}

interface SlideCarouselButtonType {
  name: "next" | "prev";
  swiperRef: RefObject<SwiperType | null>;
}

export type {
  ShowcaseType,
  ApartmentsType,
  GetStartedType,
  TestimonialsType,
  SlideCarouselButtonType,
};
