"use client";

import {
  type FunctionComponent,
  type JSX,
  type RefObject,
  useRef,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";
import { navMenuItems } from "@/lib/data/header/data";
import type { HeaderContextType } from "@/context/header/context";
import useHeader from "@/hooks/context/header/hooks";
import { isActive } from "@/lib/utils/header/utils";
import NavMenuItem from "@/components/ui/header/nav-menu/nav-menu-item";
import ActionButton from "@/components/ui/header/action/action-button";
import SideNavMenuClose from "@/components/ui/header/nav-menu/side-nav-menu-close";

const SideNavMenu: FunctionComponent = (): JSX.Element => {
  const currentPath: string = usePathname();

  navMenuItems.forEach((item): void => {
    item.setActive(isActive, currentPath);
  });

  const { isSidebarNavMenuOpen, setIsSidebarNavMenuOpen }: HeaderContextType =
    useHeader();
  const sidebarRef: RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = sidebarRef.current;

    const handleClickOutside = (event: MouseEvent) => {
      if (element && !element.contains(event.target as Node | null)) {
        setIsSidebarNavMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside
      className={`fixed top-0 left-0 w-full h-full z-50 select-none
    transition-opacity duration-300 ease-out
    ${
      isSidebarNavMenuOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
    >
      <div className="w-full h-full absolute inset-0 bg-black/50">
        <div
          className={`w-[280px] h-full flex transform transition-transform duration-300 ease-out
      ${isSidebarNavMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          ref={sidebarRef}
        >
          <ul className="w-full h-full bg-white border-r border-gray-300 overflow-auto">
            {navMenuItems.map(({ href, label, active }): JSX.Element => {
              return (
                <li key={href} className="border-b border-gray-300">
                  <NavMenuItem
                    href={href}
                    label={label}
                    active={active!}
                    area="side-nav-menu"
                  />
                </li>
              );
            })}
            <li className="bg-white hover:bg-blue-1 text-primary-text border-b border-gray-300 hover:text-white transition-colors duration-300 fill-blue-1 hover:fill-white sm:hidden">
              <ActionButton />
            </li>
          </ul>
          <SideNavMenuClose />
        </div>
      </div>
    </aside>
  );
};

export default SideNavMenu;
