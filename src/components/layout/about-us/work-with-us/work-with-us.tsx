"use client";

import type { FunctionComponent, JSX } from "react";
import type { WorkWithUsType as WorkWithUsItemType } from "@/lib/types/about-us/types";
import Image from "next/image";
import WorkWithUsArea from "@/components/lib/about-us/work-with-us/work-with-us";
import WorkWithUsItem from "@/components/ui/about-us/work-with-us/work-with-us-item";

const WorkWithUs: FunctionComponent = (): JSX.Element => {
  const workWithUsItems: WorkWithUsItemType[] = [
    {
      bannerSrc: "/game-night.png",
      title: "Game Night",
    },
    {
      bannerSrc: "/stocked-kitchen.png",
      title: "Stocked Kitchen",
    },
    {
      bannerSrc: "/happy-hours.png",
      title: "Happy Hours",
    },
  ];

  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px] text-primary-text">
        <div className="grid lg-xl:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/cat.jpg"
              alt="Pet Friendly Banner"
              width={540}
              height={360}
              className="w-full h-full"
            />
          </div>
          <WorkWithUsArea />
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg-xl:[grid-template-columns:repeat(3,minmax(0,1fr))_!important] gap-8">
          {workWithUsItems.map(
            ({ bannerSrc, title }, index): JSX.Element => {
              return (
                <div
                  key={title}
                  className={`${
                    index === 0
                      ? "sm:col-span-2 lg-xl:[grid-column:span_1_/_span_1_!important]"
                      : ""
                  }`}
                >
                  <WorkWithUsItem bannerSrc={bannerSrc} title={title} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
