import type { NavMenuItem, isActiveFunc } from "@/lib/types/header/types";

const navMenuItems: NavMenuItem[] = [
  {
    href: "/",
    label: "Home",
    setActive(isActive: isActiveFunc, currentPath: string) {
      this.active = isActive("/", currentPath);
    },
  },
  {
    href: "/listing",
    label: "Listing",
    setActive(isActive: isActiveFunc, currentPath: string) {
      this.active = isActive("/listing", currentPath);
    },
  },
  {
    href: "/blog",
    label: "Blog",
    setActive(isActive: isActiveFunc, currentPath: string) {
      this.active = isActive("/blog", currentPath);
    },
  },
  {
    href: "/about-us",
    label: "About Us",
    setActive(isActive: isActiveFunc, currentPath: string) {
      this.active = isActive("/about-us", currentPath);
    },
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
    setActive(isActive: isActiveFunc, currentPath: string) {
      this.active = isActive("/privacy-policy", currentPath);
    },
  },
  {
    href: "/contact-us",
    label: "Contact Us",
    setActive(isActive: isActiveFunc, currentPath: string) {
      this.active = isActive("/contact-us", currentPath);
    },
  },
];

export { navMenuItems };
