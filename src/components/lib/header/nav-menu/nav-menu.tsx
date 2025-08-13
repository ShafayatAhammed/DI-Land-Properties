"use client";

import type { FunctionComponent, JSX } from "react";
import { usePathname } from "next/navigation";
import { navMenuItems } from "@/lib/data/header/data";
import { isActive } from "@/lib/utils/header/utils";
import NavMenuItem from "@/components/ui/header/nav-menu/nav-menu-item";

const NavMenu: FunctionComponent = (): JSX.Element => {
  const currentPath: string = usePathname();

  navMenuItems.forEach((item): void => {
    item.setActive(isActive, currentPath);
  });

  return (
    <nav className="hidden lg-xl:block select-none">
      <ul className="flex items-center">
        {navMenuItems.map(({ href, label, active }): JSX.Element => {
          return (
            <li key={href} className="xl-2xl:text-[17.5px]">
              <NavMenuItem
                href={href}
                label={label}
                active={active!}
                area="nav-menu"
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
