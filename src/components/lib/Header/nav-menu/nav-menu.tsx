"use client";

import type { FunctionComponent, JSX } from "react";
import { usePathname } from "next/navigation";
import { navMenuItems } from "@lib/data/nav-menu/data";
import { isActive } from "@lib/utils/nav-menu/utils";
import NavMenuItem from "@components/ui/header/nav-menu/nav-menu-item";

const NavMenu: FunctionComponent = (): JSX.Element => {
  const currentPath: string = usePathname();

  navMenuItems.forEach((item): void => {
    item.setActive(isActive, currentPath);
  });

  return (
    <nav className="hidden lg-xl:block select-none">
      <ul className="flex items-center">
        {navMenuItems.map((item) => {
          return (
            <li key={item.href} className="xl-2xl:text-[17.5px]">
              <NavMenuItem
                key={item.href}
                href={item.href}
                label={item.label}
                active={item.active!}
                area="large"
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
