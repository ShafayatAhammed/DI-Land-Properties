import type { FunctionComponent, JSX } from "react";
import type { ApartmentTypesType as ApartmentType } from "@/lib/types/home/types";
import ApartmentTypeArea from "@/components/ui/home/apartment-types/apartment-type";

const ApartmentTypes: FunctionComponent = (): JSX.Element => {
  const apartmentTypes: ApartmentType[] = [
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
        <ApartmentTypeArea
          title={apartmentTypes[0].title}
          propertyCount={apartmentTypes[0].propertyCount}
          bannerSrc={apartmentTypes[0].bannerSrc}
          propertiesUrl={apartmentTypes[0].propertiesUrl}
        />
      </div>
      <div>
        <ApartmentTypeArea
          title={apartmentTypes[1].title}
          propertyCount={apartmentTypes[1].propertyCount}
          bannerSrc={apartmentTypes[1].bannerSrc}
          propertiesUrl={apartmentTypes[1].propertiesUrl}
        />
      </div>
      <div className="md:row-start-2">
        <ApartmentTypeArea
          title={apartmentTypes[2].title}
          propertyCount={apartmentTypes[2].propertyCount}
          bannerSrc={apartmentTypes[2].bannerSrc}
          propertiesUrl={apartmentTypes[2].propertiesUrl}
        />
      </div>
      <div className="md:row-start-2 md:col-start-2 md:col-span-2">
        <ApartmentTypeArea
          title={apartmentTypes[3].title}
          propertyCount={apartmentTypes[3].propertyCount}
          bannerSrc={apartmentTypes[3].bannerSrc}
          propertiesUrl={apartmentTypes[3].propertiesUrl}
        />
      </div>
      <div className="row-span-2">
        <ApartmentTypeArea
          title={apartmentTypes[4].title}
          propertyCount={apartmentTypes[4].propertyCount}
          bannerSrc={apartmentTypes[4].bannerSrc}
          propertiesUrl={apartmentTypes[4].propertiesUrl}
        />
      </div>
    </div>
  );
};

export default ApartmentTypes;
