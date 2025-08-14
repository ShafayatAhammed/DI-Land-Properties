import type { FunctionComponent, JSX, ReactElement } from "react";
import type { ContactFormInputType } from "@/lib/types/contact/types";
import ContactFormInput from "@/components/ui/contact-us/contacts/contact-form-input";

const ContactForm: FunctionComponent = (): JSX.Element => {
  const contactFormInputs: ContactFormInputType[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={25}
          height={25}
          className="fill-blue-1 w-[25px] h-[25px] xl-2xl:w-[25px] xl-2xl:h-[25px]"
        >
          <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
        </svg>
      ),
      placeholder: "First Name, Last Name*",
      type: "text",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={25}
          height={25}
          className="fill-blue-1 w-[25px] h-[25px] xl-2xl:w-[25px] xl-2xl:h-[25px]"
        >
          <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
        </svg>
      ),
      placeholder: "Your Email Address*",
      type: "email",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={25}
          height={25}
          className="fill-blue-1 w-[25px] h-[25px] xl-2xl:w-[25px] xl-2xl:h-[25px]"
        >
          <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
        </svg>
      ),
      placeholder: "Your Phone",
      type: "tel",
    },
  ];

  return (
    <div className="lg-xl-2:w-2/3">
      <h4 className="text-2xl xl-2xl:text-3xl">Contact Form</h4>
      <form className="mt-12 grid md:grid-cols-2 grid-rows-6 md:grid-rows-3 gap-6">
        <div className="w-full h-[50px] relative">
          <ContactFormInput
            placeholder={contactFormInputs[0].placeholder}
            icon={contactFormInputs[0].icon}
            type={contactFormInputs[0].type}
          />
        </div>
        <div className="w-full row-span-2 row-start-4 md:col-start-2 md:row-start-1">
          <textarea
            className="w-full h-full outline-none bg-[#f0f0f0] text-sm xl-2xl:text-base text-primary-text px-5 py-5 resize-none"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="w-full h-[50px] relative">
          <ContactFormInput
            placeholder={contactFormInputs[1].placeholder}
            icon={contactFormInputs[1].icon}
            type={contactFormInputs[1].type}
          />
        </div>
        <div className="w-full h-[50px] relative">
          <ContactFormInput
            placeholder={contactFormInputs[2].placeholder}
            icon={contactFormInputs[2].icon}
            type={contactFormInputs[2].type}
          />
        </div>
        <div className="w-full h-[50px]">
          <button
            type="submit"
            className="bg-blue-1 hover:bg-blue-2 text-white w-1/2 h-full cursor-pointer rounded-md outline-none transition-colors xl-2xl:text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
