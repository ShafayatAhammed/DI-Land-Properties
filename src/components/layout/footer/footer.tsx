import type { FunctionComponent, JSX } from "react";
import Head from "@/components/lib/footer/head/head";
import Body from "@/components/lib/footer/body/body";

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <footer className="bg-primary-text py-10 px-[17px] sm:px-7 md:px-14 xl:px-28">
      <div className="mx-auto max-w-[1536px]">
        <Head />
        <Body />
        <div className="text-sm xl-2xl:text-base mt-5 text-[#FFFFFF80] text-center">
          <p>
            &copy; {new Date().getFullYear()} DI Land Properties. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
