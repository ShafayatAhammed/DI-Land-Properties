import type { FunctionComponent, JSX } from "react";
import type { ContactFormInputType } from "@/lib/types/contact-form-input/types";
import ContactFormInput from "@/components/ui/contact-form-input/contact-form-input";
import Link from "next/link";

const Contact: FunctionComponent = (): JSX.Element => {
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
    <div className="text-primary-text bg-white border-2 border-gray-200 p-2">
      <div>
        <p className="flex items-center gap-2 justify-center text-center text-base xl-2xl:text-lg">
          Call :{" "}
          <Link
            href="tel:+8801575575542"
            className="text-[17px] xl-2xl:text-[19px] font-bold border-b border-dashed"
          >
            +880 1575 575 542
          </Link>
        </p>
        <div className="flex justify-center items-center gap-1 mt-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={20}
              height={20}
              className="fill-gray-400 w-[18px] h-[18px] xl-2xl:w-[20px] xl-2xl:h-[20px]"
            >
              <path d="M333.4 66.9C329.2 65 324.7 64 320 64C315.3 64 310.8 65 306.6 66.9L118.3 146.8C96.3 156.1 79.9 177.8 80 204C80.5 303.2 121.3 484.7 293.6 567.2C310.3 575.2 329.7 575.2 346.4 567.2C518.8 484.7 559.6 303.2 560 204C560.1 177.8 543.7 156.1 521.7 146.8L333.4 66.9zM313.6 247.5L320 256L326.4 247.5C337.5 232.7 354.9 224 373.3 224C405.7 224 432 250.3 432 282.7L432 288C432 337.1 366.2 386.1 335.5 406.3C326 412.5 314 412.5 304.6 406.3C273.9 386.1 208.1 337 208.1 288L208.1 282.7C208.1 250.3 234.4 224 266.8 224C285.3 224 302.7 232.7 313.7 247.5z" />
            </svg>
          </div>
          <p className="text-sm xl-2xl:text-base">Admin</p>
        </div>
      </div>
      <form className="flex flex-col gap-5 mt-2">
        {contactFormInputs.map(({ icon, placeholder, type }): JSX.Element => {
          return (
            <div key={placeholder} className="w-full h-[50px] relative">
              <ContactFormInput
                icon={icon}
                placeholder={placeholder}
                type={type}
              />
            </div>
          );
        })}
        <textarea className="w-full h-[130px] outline-none bg-[#f0f0f0] text-sm xl-2xl:text-base px-5 py-5 resize-none"></textarea>
        <button
          type="submit"
          className="bg-blue-1 hover:bg-blue-2 text-white py-3 cursor-pointer rounded-md outline-none transition-colors xl-2xl:text-lg"
        >
          Contact Listing
        </button>
      </form>
    </div>
  );
};

export default Contact;
