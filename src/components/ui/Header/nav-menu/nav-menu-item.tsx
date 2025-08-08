"use client";

import type { FunctionComponent, JSX } from "react";
import Link from "next/link";

interface NavMenuItemProps {
  href: string;
  label: string;
  active: boolean;
  area: "small" | "large";
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
          ? "text-white bg-nav-item-hover"
          : "text-primary-text hover:text-white bg-white hover:bg-nav-item-hover transition duration-300"
      } px-[15px] py-[9px] ${area === "small" ? "block" : ""}`}
    >
      {label}
    </Link>
  );
};

export default NavMenuItem;
