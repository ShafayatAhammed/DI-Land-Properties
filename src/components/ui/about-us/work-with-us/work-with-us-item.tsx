"use client";

import type { FunctionComponent, JSX } from "react";
import type { WorkWithUsType as WorkWithUsItemProps } from "@/lib/types/about-us/types";
import Image from "next/image";

const WorkWithUsItem: FunctionComponent<WorkWithUsItemProps> = ({
  bannerSrc,
  title,
}: WorkWithUsItemProps): JSX.Element => {
  return (
    <div className="w-full aspect-[16/9] group relative">
      <div className="absolute w-full h-full top-0 left-0">
        <Image
          src={bannerSrc}
          alt={title}
          width={491}
          height={276}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default WorkWithUsItem;
