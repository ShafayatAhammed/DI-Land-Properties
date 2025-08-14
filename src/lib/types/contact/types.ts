import type { ReactElement } from "react";

interface ActionType {
  icon: ReactElement<SVGSVGElement>;
  title: string;
  description: string;
}

interface ContactFormInputType {
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

export type { ActionType, ContactFormInputType, ContactsType };
