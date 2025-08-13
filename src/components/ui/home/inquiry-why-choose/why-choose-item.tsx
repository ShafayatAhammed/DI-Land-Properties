"use client";

import type { FunctionComponent, JSX } from "react";
import type { WhyChooseType as WhyChooseItemProps } from "@/lib/types/home/types";
import Image from "next/image";

const WhyChooseItem: FunctionComponent<WhyChooseItemProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}: WhyChooseItemProps): JSX.Element => {
  return (
    <div className="flex md:flex-row flex-col md:items-start items-center md:text-start text-center gap-4">
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={100}
        height={100}
        className="w-[80px] h-[80px] xl-2xl:w-[100px] xl-2xl:h-[100px] aspect-[1/1]"
      />
      <div>
        <h4 className="text-2xl xl-2xl:text-[28px]">{title}</h4>
        <p className="text-[#303441B5] mt-2 text-base xl-2xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseItem;
