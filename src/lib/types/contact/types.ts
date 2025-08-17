import type { ReactElement } from "react";

interface ActionType {
  icon: ReactElement<SVGSVGElement>;
  title: string;
  description: string;
}

interface ContactsType {
  picSrc: string;
  picAlt: string;
  name: string;
  position: string;
  email: string;
  skype: string;
}

export type { ActionType, ContactsType };
