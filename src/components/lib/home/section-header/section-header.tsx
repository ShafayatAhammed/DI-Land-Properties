import type { FunctionComponent, JSX } from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
  title,
  description,
}: SectionHeaderProps): JSX.Element => {
  return (
    <div className={`${description ? "text-center" : ""} mb-10`}>
      <h2 className="text-[35px] xs:text-[40px] xl-2xl:text-[60px] text-primary-text leading-11 xl-2xl:leading-16">
        {title}
      </h2>
      {description && (
        <p className="text-[#434751] text-[17px] xl-2xl:text-xl mt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
