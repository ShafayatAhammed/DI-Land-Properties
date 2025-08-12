import type { isActiveFunc } from "@/lib/types/nav-menu/types";

const isActive: isActiveFunc = (path: string, currentPath: string): boolean => {
  return path === currentPath;
};

export { isActive };
