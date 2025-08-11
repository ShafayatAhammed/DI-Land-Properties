import { useState, useEffect } from "react";

const useWindowWidth: () => number = (): number => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize: () => void = (): void => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default useWindowWidth;
