import type { NextFont } from "next/dist/compiled/@next/font";
import { Roboto } from "next/font/google";

const roboto: NextFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
  display: "swap",
  fallback: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

export { roboto };
