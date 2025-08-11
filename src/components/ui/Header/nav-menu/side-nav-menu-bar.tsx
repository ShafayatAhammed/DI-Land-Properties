"use client";

import type { FunctionComponent, JSX } from "react";
import type { HeaderContextType } from "../../../../context/header/context";
import useHeader from "../../../../hooks/context/header/hooks";

const SideNavMenuBar: FunctionComponent = (): JSX.Element => {
  const { setIsSidebarNavMenuOpen }: HeaderContextType = useHeader();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      className="lg-xl:hidden cursor-pointer sm:w-[43px] sm:h-[43px] fill-primary-text"
      width={40}
      height={40}
      onClick={() => setIsSidebarNavMenuOpen(true)}
    >
      <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
    </svg>
  );
};

export default SideNavMenuBar;
