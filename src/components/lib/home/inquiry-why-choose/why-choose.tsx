import type { FunctionComponent, JSX } from "react";
import SectionHeader from "../section-header/section-header";
import type { WhyChooseType as WhyChooseItemType } from "@/lib/types/home/types";
import WhyChooseItem from "@/components/ui/home/inquiry-why-choose/why-choose-item";

const WhyChoose: FunctionComponent = (): JSX.Element => {
  const whyChooseItems: WhyChooseItemType[] = [
    {
      iconSrc: "/property-icon.png",
      iconAlt: "Property Icon",
      title: "Wide Range of Properties",
      description:
        "With a robust selection of popular properties on hand, as well as leading properties from real estate experts.",
    },
    {
      iconSrc: "/cash-icon.png",
      iconAlt: "Cash Icon",
      title: "Financing Made Easy",
      description:
        "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      iconSrc: "/users-icon.png",
      iconAlt: "Users Icon",
      title: "Thrusted by Thousands",
      description:
        "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
    },
  ];

  return (
    <div>
      <div className="text-center md:text-start">
        <SectionHeader title="Why Choose Us" />
      </div>
      <div className="text-primary-text">
        <p className="text-center md:text-start text-base xl-2xl:text-lg">
          It’s our job to get you the best price for your home and make sure
          that you get the best possible deal on the property
        </p>
        <div className="mt-10 md:mt-5 flex flex-col gap-10">
          {whyChooseItems.map(
            ({ iconSrc, iconAlt, title, description }): JSX.Element => {
              return (
                <WhyChooseItem
                  key={title}
                  iconSrc={iconSrc}
                  iconAlt={iconAlt}
                  title={title}
                  description={description}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
