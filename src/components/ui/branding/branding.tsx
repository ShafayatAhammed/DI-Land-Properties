"use client";

import type { FunctionComponent, JSX } from "react";
import Link from "next/link";
import Image from "next/image";

const Branding: FunctionComponent = (): JSX.Element => {
  return (
    <Link href="/" prefetch={true}>
      <Image
        src="/logos/logo-non-bg.png"
        alt="DI Land Properties Logo"
        className="w-[205px] h-[42px] xl-2xl:w-[210px] xl-2xl:h-[47px]"
        width={210}
        height={47}
        priority={true}
      />
    </Link>
  );
};

export default Branding;
