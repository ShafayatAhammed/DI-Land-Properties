import type { ReactElement } from "react";

interface FactAndFeaturesType {
  icon: ReactElement<SVGSVGElement>;
  name: string;
  available: "Yes" | "No";
}

export type { FactAndFeaturesType };
