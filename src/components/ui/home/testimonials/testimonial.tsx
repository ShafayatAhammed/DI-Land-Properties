"use client";

import type { FunctionComponent, JSX } from "react";
import type { TestimonialsType as TestimonialProps } from "@/lib/types/home/types";
import Image from "next/image";

const Testimonial: FunctionComponent<TestimonialProps> = ({
  picSrc,
  name,
  position,
  review,
}: TestimonialProps): JSX.Element => {
  return (
    <div className="px-4 py-2 select-none">
      <div className="flex gap-5 items-center">
        <div>
          <Image
            src={picSrc}
            alt={`Client - ${name}`}
            width={60}
            height={60}
            className="aspect-[1/1] rounded-full outline-2 outline-blue-2 outline-offset-3 w-[55px] h-[55px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
          />
        </div>
        <div>
          <h5 className="text-primary-text text-[22px] xl-2xl:text-[26px]">
            {name}
          </h5>
          <p className="text-sm xl-2xl:text-base text-gray-500">{position}</p>
        </div>
      </div>
      <p className="mt-8 text-gray-500 text-base xl-2xl:text-lg">
        <em>{review}</em>
      </p>
    </div>
  );
};

export default Testimonial;
