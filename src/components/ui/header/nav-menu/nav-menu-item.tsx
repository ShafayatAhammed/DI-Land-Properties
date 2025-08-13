"use client";

import type { FunctionComponent, JSX } from "react";
import Link from "next/link";

interface NavMenuItemProps {
  href: string;
  label: string;
  active: boolean;
  area: "nav-menu" | "side-nav-menu";
}

const NavMenuItem: FunctionComponent<NavMenuItemProps> = ({
  href,
  label,
  active,
  area,
}: NavMenuItemProps): JSX.Element => {
  return (
    <Link
      href={href}
      prefetch={true}
      className={`${
        active
          ? "text-white bg-blue-1"
          : "text-primary-text hover:text-white bg-white hover:bg-blue-1 transition duration-300"
      } px-[15px] py-[9px] ${area === "side-nav-menu" ? "block" : ""}`}
    >
      {label}
    </Link>
  );
};

export default NavMenuItem;
