import type { ReactElement } from "react";

interface CallToActionType {
  icon: ReactElement<SVGSVGElement>;
  title: string;
  description: string;
}

interface ContactFormInput {
  icon: ReactElement<SVGSVGElement>;
  placeholder: string;
  type: "text" | "email" | "tel";
}

interface ContactsType {
  picSrc: string;
  picAlt: string;
  name: string;
  position: string;
  email: string;
  skype: string;
}

export type { CallToActionType, ContactFormInput, ContactsType };
