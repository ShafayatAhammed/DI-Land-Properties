"use client";

import type { FunctionComponent, JSX } from "react";
import type { ApartmentTypesType as ApartmentTypeProps } from "@/lib/types/home/types";
import Link from "next/link";
import Image from "next/image";

const ApartmentType: FunctionComponent<ApartmentTypeProps> = ({
  title,
  propertyCount,
  bannerSrc,
  propertiesUrl,
}: ApartmentTypeProps): JSX.Element => {
  return (
    <Link
      href={propertiesUrl}
      className="select-none inline-block w-full h-full relative group"
    >
      <div className="w-full h-full rounded-md">
        <div className="z-50 rounded-md w-full h-full">
          <Image
            src={bannerSrc}
            alt="Apartment Type Banner"
            width={360}
            height={341}
            className="w-full h-full rounded-md group-hover:scale-102 transition-all"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-50 rounded-md flex items-end group-hover:scale-102 transition-all w-full h-full p-8">
          <div>
            <div className="flex items-center relative">
              <h4 className="text-white text-4xl md:text-3xl xl-2xl:[font-size:36px_!important] leading-7">
                {title}
              </h4>
              <div className="bg-white rounded-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity absolute -right-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={25}
                  height={25}
                  className="fill-primary-text w-[25px] h-[25px] md:w-[22px] md:h-[22px] xl-2xl:w-[25px_!important] xl-2xl:h-[25px_!important]"
                >
                  <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 font-semibold mt-1 text-xl md:text-base xl-2xl:[font-size:20px_!important]">
              {propertyCount} Properties
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentType;
