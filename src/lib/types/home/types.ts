interface HeroFeatListingsPrptRentType {
  bannerSrc: string;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
  listingUrl: string;
  section: "carousel" | "properties-for-rent";
}

interface ApartmentTypesType {
  title: string;
  propertyCount: number;
  bannerSrc: string;
  propertiesUrl: string;
}

interface WhyChooseType {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

export type { HeroFeatListingsPrptRentType, ApartmentTypesType, WhyChooseType };
