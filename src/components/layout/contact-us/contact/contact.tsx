import ContactForm from "@components/lib/contact-us/contact/contact-form";
import Contacts from "@components/lib/contact-us/contact/contacts";
import type { FunctionComponent, JSX } from "react";

const Contact: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px] flex gap-14 lg-xl-2:gap-6 flex-col lg-xl-2:flex-row">
        <ContactForm />
        <Contacts />
      </div>
    </section>
  );
};

export default Contact;
