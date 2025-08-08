"use client";

import {
  type Context,
  createContext,
  type Dispatch,
  type SetStateAction,
  type FunctionComponent,
  type ReactNode,
  type JSX,
  useState,
} from "react";

interface HeaderContextType {
  isSidebarNavMenuOpen: boolean;
  setIsSidebarNavMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const HeaderContext: Context<HeaderContextType | undefined> = createContext<
  HeaderContextType | undefined
>(undefined);

const HeaderProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isSidebarNavMenuOpen, setIsSidebarNavMenuOpen] =
    useState<boolean>(false);

  return (
    <HeaderContext.Provider
      value={{ isSidebarNavMenuOpen, setIsSidebarNavMenuOpen }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export { type HeaderContextType, HeaderContext, HeaderProvider };
