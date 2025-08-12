"use client";

import type { FunctionComponent, JSX } from "react";
import Link from "next/link";

const OfficeDetails: FunctionComponent = (): JSX.Element => {
  return (
    <div className="lg-xl-2:w-1/2 flex flex-col gap-6 text-primary-text">
      <h4 className="text-2xl xl-2xl:text-3xl">Dhaka Office</h4>
      <p className="xl-2xl:text-lg">
        Morbi mollis elit vitae elit molestie lobortis. Cras eu purus ipsum.
        Aliquam et ullamcorper nisl. Nam sem justo, sagittis sit amet sem at,
        mollis congue eros. Quisque vel mattis eros. Proin euismod massa id est
        finibus, rutrum ornare velit pellentesque. Ut arcu magna, interdum eget
        egestas eget, sagittis a libero. Donec felis tellus, vehicula at purus
        condimentum, hendrerit dictum odio. Vivamus et condimentum sapien.
      </p>
      <div className="mt-5 flex gap-3 xs:gap-12 flex-col xs:flex-row xs:justify-between">
        <div>
          <div className="flex gap-2 items-center xs:items-start xs-2:items-center flex-row xs:flex-col xs-2:flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="fill-blue-2 w-[50px] h-[50px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
                width={60}
                height={60}
              >
                <path d="M376 32C504.1 32 608 135.9 608 264C608 277.3 597.3 288 584 288C570.7 288 560 277.3 560 264C560 162.4 477.6 80 376 80C362.7 80 352 69.3 352 56C352 42.7 362.7 32 376 32zM384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224zM352 152C352 138.7 362.7 128 376 128C451.1 128 512 188.9 512 264C512 277.3 501.3 288 488 288C474.7 288 464 277.3 464 264C464 215.4 424.6 176 376 176C362.7 176 352 165.3 352 152zM176.1 65.4C195.8 60 216.4 70.1 224.2 88.9L264.7 186.2C271.6 202.7 266.8 221.8 252.9 233.2L208.8 269.3C241.3 340.9 297.8 399.3 368.1 434.2L406.7 387C418 373.1 437.1 368.4 453.7 375.2L551 415.8C569.8 423.6 579.9 444.2 574.5 463.9L573 469.4C555.4 534.1 492.9 589.3 416.6 573.2C241.6 536.1 103.9 398.4 66.8 223.4C50.7 147.1 105.9 84.6 170.5 66.9L176 65.4z" />
              </svg>
            </div>
            <div>
              <p className="text-[13px] xl-2xl:text-base">Call us:</p>
              <p className="text-[15px] xl-2xl:text-[17px]">
                +880 1575 575 542
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center xs:items-start xs-2:items-center flex-row xs:flex-col xs-2:flex-row mt-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="fill-blue-2 w-[50px] h-[50px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
                width={60}
                height={60}
              >
                <path d="M155.8 96C123.9 96 96.9 119.4 92.4 150.9L64.6 345.2C64.2 348.2 64 351.2 64 354.3L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 354.3C576 351.3 575.8 348.2 575.4 345.2L547.6 150.9C543.1 119.4 516.1 96 484.2 96L155.8 96zM155.8 160L484.3 160L511.7 352L451.8 352C439.7 352 428.6 358.8 423.2 369.7L408.9 398.3C403.5 409.1 392.4 416 380.3 416L259.9 416C247.8 416 236.7 409.2 231.3 398.3L217 369.7C211.6 358.9 200.5 352 188.4 352L128.3 352L155.8 160z" />
              </svg>
            </div>
            <div>
              <p className="text-[13px] xl-2xl:text-base">
                Have any Questions?
              </p>
              <p>
                <Link
                  href="mailto:info@dilandproperties.com"
                  className="text-[15px] xl-2xl:text-[17px] text-blue-1 hover:underline"
                >
                  info@dilandproperties.com
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center xs:items-start xs-2:items-center flex-row xs:flex-col xs-2:flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="fill-blue-2 w-[50px] h-[50px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
                width={60}
                height={60}
              >
                <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
              </svg>
            </div>
            <div>
              <p className="text-[15px] xl-2xl:text-[17px] xs-2:break-all">
                Dakshinkhan Bazar, Dhaka 1230, Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center xs:items-start xs-2:items-center flex-row xs:flex-col xs-2:flex-row mt-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="fill-blue-2 w-[50px] h-[50px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
                width={60}
                height={60}
              >
                <path d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z" />
              </svg>
            </div>
            <div>
              <p className="text-[15px] xl-2xl:text-[17px]">
                Saturday - Friday
                <br />
                10:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeDetails;
