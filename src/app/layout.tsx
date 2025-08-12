import type { Metadata } from "next";
import type { ReactNode, FunctionComponent, JSX } from "react";
import "@/app/globals.css";
import { banglaFont } from "@/fonts/bangla-fonts/fonts";
import { HeaderProvider } from "@/context/header/context";
import Header from "@/components/layout/header/header";

export const metadata: Metadata = {
  title:
    "Best Land and Flats for Sale | Dakshinkhan, Uttarkhan and Kanchkura Properties | DI Land Properties",
  description:
    "The most trusted platform for buying and selling land, houses and flats in Dakshinkhan, Uttarkhan and Kanchkura. Verified properties, affordable prices and professional services are now in one place.",
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

const RootLayout: FunctionComponent<RootLayoutProps> = ({
  children,
}: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en" className={banglaFont.className}>
      <body>
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
