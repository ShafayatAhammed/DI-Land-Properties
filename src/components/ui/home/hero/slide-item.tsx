import type { FunctionComponent, JSX } from "react";
import type { ShowcaseType as SlideItemProps } from "@/lib/types/home/types";
import Link from "next/link";

const SlideItem: FunctionComponent<Omit<SlideItemProps, "section">> = ({
  bannerSrc,
  title,
  beds,
  baths,
  sqft,
  price,
  listingUrl,
}: Omit<SlideItemProps, "section">): JSX.Element => {
  return (
    <div
      className={`bg-no-repeat bg-center bg-cover relative w-full h-full`}
      style={{ backgroundImage: `url(${bannerSrc})` }}
    >
      <div className="w-full h-full absolute inset-0 bg-black/50 px-[17px] sm:px-7 md:px-14 xl:px-28">
        <div className="mx-auto max-w-[1536px] w-full h-full text-white flex flex-col gap-2 md:gap-4 items-center justify-center text-center">
          <h1 className="text-[35px] xs:text-[40px] md:text-[50px] xl-2xl:[font-size:60px_!important] leading-10 xs-2:[line-height:61px_!important]">
            {title}
          </h1>
          <p className="text-[17px] md:text-lg xl-2xl:[font-size:20px_!important]">
            <span>${beds} Beds</span> - <span>{baths} Baths</span> -{" "}
            <span>{sqft} sq ft</span>
          </p>
          <p className="text-[27px] md:text-3xl xl-2xl:[font-size:35px_!important]">
            {price}
          </p>
          <div>
            <Link
              href={listingUrl}
              className="bg-blue-1 px-[30px] py-[14px] rounded-md hover:bg-blue-2 transition-colors inline-flex items-center justify-center gap-2"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={30}
                  height={30}
                  className="fill-white w-[25px] h-[25px] xl-2xl:w-[30px] xl-2xl:h-[30px]"
                >
                  <path d="M409 337C418.4 327.6 418.4 312.4 409 303.1L265 159C258.1 152.1 247.8 150.1 238.8 153.8C229.8 157.5 224 166.3 224 176L224 256L112 256C85.5 256 64 277.5 64 304L64 336C64 362.5 85.5 384 112 384L224 384L224 464C224 473.7 229.8 482.5 238.8 486.2C247.8 489.9 258.1 487.9 265 481L409 337zM416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L480 544C533 544 576 501 576 448L576 192C576 139 533 96 480 96L416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160C497.7 160 512 174.3 512 192L512 448C512 465.7 497.7 480 480 480L416 480z" />
                </svg>
              </div>
              <p className="text-base xl-2xl:text-xl">View Details</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
