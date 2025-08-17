import type { ReactElement } from "react";

interface ContactFormInputType {
  icon: ReactElement<SVGSVGElement>;
  placeholder: string;
  type: "text" | "email" | "tel";
}

export type { ContactFormInputType };
