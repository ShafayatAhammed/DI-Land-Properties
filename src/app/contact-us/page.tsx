import type { FunctionComponent, JSX } from "react";
import TitleBox from "@/components/layout/title-box/title-box";
import Office from "@/components/layout/contact-us/office/office";
import Contact from "@/components/layout/contact-us/contact/contact";
import CallToAction from "@/components/layout/contact-us/call-to-action/call-to-action";

const ContactUs: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <TitleBox title="Contact Us" />
      <Office />
      <Contact />
      <CallToAction />
    </>
  );
};

export default ContactUs;
