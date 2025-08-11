import type { FunctionComponent, JSX, ReactElement } from "react";
import CallToActionItem from "../../../../components/ui/contact-us/call-to-action/call-to-action-item";

interface Actions {
  icon: ReactElement<SVGSVGElement>;
  title: string;
  description: string;
}

const CallToAction: FunctionComponent = (): JSX.Element => {
  const actions: Actions[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={100}
          height={100}
          className="fill-white w-[80px] h-[80px] md:w-[100px] md:h-[100px] xl-2xl:w-[120px_!important] xl-2xl:h-[120px_!important]"
        >
          <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM352 240C352 195.8 316.2 160 272 160C227.8 160 192 195.8 192 240C192 288.8 238.5 351.6 260.6 378.6C266.6 385.9 277.4 385.9 283.3 378.6C305.4 351.6 351.9 288.8 351.9 240zM240 240C240 222.3 254.3 208 272 208C289.7 208 304 222.3 304 240C304 257.7 289.7 272 272 272C254.3 272 240 257.7 240 240z" />
        </svg>
      ),
      title: "Looking for the new home?",
      description:
        "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={100}
          height={100}
          className="fill-white w-[80px] h-[80px] md:w-[100px] md:h-[100px] xl-2xl:w-[120px_!important] xl-2xl:h-[120px_!important]"
        >
          <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" />
        </svg>
      ),
      title: "Want to sell your home?",
      description:
        "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
    },
  ];

  return (
    <section className="w-full px-[17px] sm:px-7 md:px-14 xl:px-28 py-[50px] lg-xl:py-[100px] bg-[url(/call-to-action-bg.jpg)] bg-no-repeat bg-center bg-cover">
      <div className="mx-auto max-w-[1536px] flex flex-col lg-xl:flex-row gap-8">
        {actions.map(({ icon, title, description }): JSX.Element => {
          return (
            <CallToActionItem
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CallToAction;
