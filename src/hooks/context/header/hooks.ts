import { type HeaderContextType, HeaderContext } from "@context/header/context";
import { useContext } from "react";

const useHeader = () => {
  const headerContext: HeaderContextType | undefined =
    useContext(HeaderContext);

  if (!headerContext) {
    throw new Error("useHeader must be used within a HeaderProvider!");
  }

  return headerContext;
};

export default useHeader;
