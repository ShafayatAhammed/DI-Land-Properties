import type { FunctionComponent, JSX } from "react";
import type { FactAndFeaturesType as FeatureItemProps } from "@/lib/types/listings/listing/types";

const FeatureItem: FunctionComponent<FeatureItemProps> = ({
  icon,
  name,
  available,
}: FeatureItemProps): JSX.Element => {
  return (
    <div className="flex items-center gap-1">
      <div>{icon}</div>
      <div className="text-sm xl-2xl:text-base">
        <p>{name}</p>
        <span className="font-bold mt-1">{available}</span>
      </div>
    </div>
  );
};

export default FeatureItem;
