import type { FunctionComponent, JSX } from "react";
import Branding from "@components/ui/Header/branding/branding";
import NavMenu from "@components/lib/Header/nav-menu/nav-menu";
import ActionButton from "@components/ui/Header/action/action-button";
import SideNavMenuBar from "@components/ui/Header/nav-menu/side-nav-menu-bar";
import SideNavMenu from "@components/lib/Header/nav-menu/side-nav-menu";

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <header className="bg-white py-5 flex items-center justify-between px-[17px] sm:px-7 md:px-14 xl:px-28 border-b border-gray-200 fixed top-0 z-[100] gap-5 sm:gap-0 w-full">
      <Branding />
      <NavMenu />
      <div className="sm:flex sm:items-center sm:gap-4">
        <div className="hidden sm:block bg-white hover:bg-nav-item-hover border border-nav-item-hover rounded-full text-primary-text hover:text-white transition-colors duration-300 fill-nav-item-hover hover:fill-white">
          <ActionButton />
        </div>
        <SideNavMenuBar />
      </div>
      <SideNavMenu />
    </header>
  );
};

export default Header;
