import type { FunctionComponent, JSX } from "react";
import type { ContactFormInputType as ContactFormInputProps } from "@/lib/types/contact-form-input/types";

const ContactFormInput: FunctionComponent<ContactFormInputProps> = ({
  icon,
  placeholder,
  type,
}: ContactFormInputProps): JSX.Element => {
  return (
    <>
      <input
        type={type}
        className="w-full h-full outline-none bg-[#f0f0f0] text-sm xl-2xl:text-base text-primary-text pl-10 pr-5"
        placeholder={placeholder}
      />
      <div className="absolute top-0 left-0 w-10 h-[50px] flex justify-center items-center">
        {icon}
      </div>
    </>
  );
};

export default ContactFormInput;
