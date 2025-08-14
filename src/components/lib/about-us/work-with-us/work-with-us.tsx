"use client";

import type { FunctionComponent, JSX } from "react";
import Link from "next/link";

const WorkWithUs: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <h3 className="text-2xl xl-2xl:text-[28px]">Working with Us</h3>
      <p className="text-lg xl-2xl:text-[22px] mt-8">
        Come be a part of a truly amazing, open, collaborative, and innovative
        culture.
      </p>
      <p className="mt-8 text-base xl-2xl:text-lg">
        Our people are always working together to build the next big thing, and
        that really keeps this place buzzing. Whether we’re planning projects or
        grabbing a beer at our monthly Happy Hours, we all have a great time
        here.
      </p>
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <p className="text-base xl-2xl:text-lg">Want to join our team?</p>
        <Link
          href="/"
          className="bg-blue-1 px-[30px] py-[14px] hover:bg-blue-2 transition-colors text-white text-[13px] xl-2xl:text-[15px] font-bold leading-3 xl-2xl:leading-4"
        >
          SEE OPEN POSITIONS
        </Link>
      </div>
    </div>
  );
};

export default WorkWithUs;
