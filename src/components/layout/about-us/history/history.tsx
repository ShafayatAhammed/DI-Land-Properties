"use client";

import type { FunctionComponent, JSX } from "react";
import Image from "next/image";
import HistoryArea from "@/components/lib/about-us/history/history";

const History: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px] text-primary-text">
        <h3 className="text-2xl xl-2xl:text-[28px]">Company History</h3>
        <div className="mt-6 grid lg-xl:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/company-history-banner.jpg"
              alt="Company History Banner"
              width={540}
              height={540}
              className="w-full h-full"
            />
          </div>
          <HistoryArea />
        </div>
      </div>
    </section>
  );
};

export default History;
