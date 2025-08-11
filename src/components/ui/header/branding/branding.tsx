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
        className="xl-2xl:w-[210px] xl-2xl:h-[47px]"
        width={205}
        height={42}
      />
    </Link>
  );
};

export default Branding;
