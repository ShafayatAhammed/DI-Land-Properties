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
        width={205}
        height={42}
      />
    </Link>
  );
};

export default Branding;
