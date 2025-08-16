import type { FunctionComponent, JSX } from "react";
import Branding from "@/components/ui/branding/branding";
import NavMenu from "@/components/lib/header/nav-menu/nav-menu";
import ActionButton from "@/components/ui/header/action/action-button";
import SideNavMenuBar from "@/components/ui/header/nav-menu/side-nav-menu-bar";
import SideNavMenu from "@/components/lib/header/nav-menu/side-nav-menu";

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <header className="bg-white py-5 px-[17px] sm:px-7 md:px-14 xl:px-28">
      <div className="flex items-center justify-between mx-auto max-w-[1536px] gap-5 sm:gap-0">
        <Branding />
        <NavMenu />
        <div className="sm:flex sm:items-center sm:gap-4">
          <div className="hidden sm:block bg-white hover:bg-blue-1 border border-blue-1 rounded-full text-primary-text hover:text-white transition-colors duration-300 fill-blue-1 hover:fill-white">
            <ActionButton />
          </div>
          <SideNavMenuBar />
        </div>
        <SideNavMenu />
      </div>
    </header>
  );
};

export default Header;
