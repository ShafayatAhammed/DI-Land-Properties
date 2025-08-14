import type { FunctionComponent, JSX } from "react";
import type { ApartmentsType as ApartmentType } from "@/lib/types/home/types";
import Apartment from "@/components/ui/home/apartments/apartment";

const Apartments: FunctionComponent = (): JSX.Element => {
  const apartments: ApartmentType[] = [
    {
      title: "Townhome",
      propertyCount: 20,
      bannerSrc: "/apartment-type-1.jpg",
      propertiesUrl: "/",
    },
    {
      title: "Houses",
      propertyCount: 20,
      bannerSrc: "/apartment-type-2.jpg",
      propertiesUrl: "/",
    },
    {
      title: "Studios",
      propertyCount: 12,
      bannerSrc: "/apartment-type-3.jpg",
      propertiesUrl: "/",
    },
    {
      title: "Apartments",
      propertyCount: 19,
      bannerSrc: "/apartment-type-4.jpg",
      propertiesUrl: "/",
    },
    {
      title: "Offices",
      propertyCount: 20,
      bannerSrc: "/apartment-type-5.jpg",
      propertiesUrl: "/",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 md:grid-row-4 lg:grid-rows-2 gap-8">
      <div className="md:col-span-2">
        <Apartment
          title={apartments[0].title}
          propertyCount={apartments[0].propertyCount}
          bannerSrc={apartments[0].bannerSrc}
          propertiesUrl={apartments[0].propertiesUrl}
        />
      </div>
      <div>
        <Apartment
          title={apartments[1].title}
          propertyCount={apartments[1].propertyCount}
          bannerSrc={apartments[1].bannerSrc}
          propertiesUrl={apartments[1].propertiesUrl}
        />
      </div>
      <div className="md:row-start-2">
        <Apartment
          title={apartments[2].title}
          propertyCount={apartments[2].propertyCount}
          bannerSrc={apartments[2].bannerSrc}
          propertiesUrl={apartments[2].propertiesUrl}
        />
      </div>
      <div className="md:row-start-2 md:col-start-2 md:col-span-2">
        <Apartment
          title={apartments[3].title}
          propertyCount={apartments[3].propertyCount}
          bannerSrc={apartments[3].bannerSrc}
          propertiesUrl={apartments[3].propertiesUrl}
        />
      </div>
      <div className="row-span-2">
        <Apartment
          title={apartments[4].title}
          propertyCount={apartments[4].propertyCount}
          bannerSrc={apartments[4].bannerSrc}
          propertiesUrl={apartments[4].propertiesUrl}
        />
      </div>
    </div>
  );
};

export default Apartments;
