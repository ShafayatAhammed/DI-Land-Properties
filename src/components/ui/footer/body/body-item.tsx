import type { FunctionComponent, JSX } from "react";

interface BodyItemProps {
  title: string;
  content: JSX.Element;
}

const BodyItem: FunctionComponent<BodyItemProps> = ({
  title,
  content,
}: BodyItemProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-white text-lg xl-2xl:text-xl">{title}</h5>
      {content}
    </div>
  );
};

export default BodyItem;
