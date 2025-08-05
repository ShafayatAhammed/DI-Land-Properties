import type { Metadata } from "next";
import type { ReactNode, FunctionComponent, JSX } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "সেরা জমি ও ফ্ল্যাট বিক্রয় | দক্ষিণখান, উত্তরখান ও কাঁচকুড়ার সম্পত্তি | DI Land Properties",
  description:
    "দক্ষিণখান, উত্তরখান ও কাঁচকুড়ায় জমি, বাড়ি ও ফ্ল্যাট কেনাবেচার সবচেয়ে নির্ভরযোগ্য প্ল্যাটফর্ম । যাচাই করা সম্পত্তি, সাশ্রয়ী দাম এবং পেশাদার সেবা এখন এক জায়গায় ।",
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

const RootLayout: FunctionComponent<RootLayoutProps> = ({
  children,
}: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
