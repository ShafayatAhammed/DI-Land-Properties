import type { FunctionComponent, JSX } from "react";

interface TitleBoxProps {
  title: string;
}

const TitleBox: FunctionComponent<TitleBoxProps> = ({
  title,
}: TitleBoxProps): JSX.Element => {
  return (
    <section className="w-full h-[200px] bg-[url(/title-box-bg.jpg)] bg-no-repeat bg-center bg-cover relative">
      <div className="w-full h-full absolute inset-0 bg-black/50 px-[17px] sm:px-7 md:px-14 xl:px-28">
        <div className="flex items-center mx-auto max-w-[1536px] w-full h-full ">
          <h1 className="text-white text-[44px] sm:text-[50px] xl-2xl:[font-size:60px_!important]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default TitleBox;
