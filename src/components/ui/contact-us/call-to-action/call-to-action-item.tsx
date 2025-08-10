import type { FunctionComponent, JSX, ReactElement } from "react";

interface CallToActionItemProps {
  icon: ReactElement<SVGSVGElement>;
  title: string;
  description: string;
}

const CallToActionItem: FunctionComponent<CallToActionItemProps> = ({
  icon,
  title,
  description,
}: CallToActionItemProps): JSX.Element => {
  return (
    <div className="flex flex-col lg-xl:flex-row bg-blue-2 opacity-[88%] px-10 py-14 items-center gap-2 md:gap-4">
      <div>{icon}</div>
      <div className="text-white text-center lg-xl:text-start">
        <h5 className="text-xl md:text-2xl xl-2xl:[font-size:27px_!important] font-bold">{title}</h5>
        <p className="text-sm xl-2xl:text-[17px] mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CallToActionItem;
