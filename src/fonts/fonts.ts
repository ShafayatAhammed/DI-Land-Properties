import type { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const banglaFont: NextFont = localFont({
  src: "../../public/fonts/bangla-font.ttf",
  preload: true,
  display: "swap",
  fallback: ["Hind Siliguri", "sans-serif"],
});

export { banglaFont };
