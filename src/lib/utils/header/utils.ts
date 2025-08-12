import type { isActiveFunc } from "@/lib/types/header/types";

const isActive: isActiveFunc = (path: string, currentPath: string): boolean => {
  return path === currentPath;
};

export { isActive };
