type isActiveFunc = (path: string, currentPath: string) => boolean;

interface NavMenuItem {
  href: string;
  label: string;
  active?: boolean;
  setActive: (isActive: isActiveFunc, currentPath: string) => void;
}

export type { isActiveFunc, NavMenuItem };
