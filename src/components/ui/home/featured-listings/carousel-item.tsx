"use client";

import type { FunctionComponent, JSX } from "react";
import Link from "next/link";
import Image from "next/image";

interface CarouselItemProps {
  bannerSrc: string;
  title: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
  listingUrl: string;
}

const CarouselItem: FunctionComponent<CarouselItemProps> = ({
  bannerSrc,
  title,
  beds,
  baths,
  sqft,
  price,
  listingUrl,
}: CarouselItemProps): JSX.Element => {
  const bedsStr = beds.toString();
  const bathsStr = baths.toString();
  const sqftStr = sqft.toString();
  const priceStr = price.toString();

  return (
    <Link href={listingUrl} className="select-none inline-block w-full h-auto">
      <div className="w-full h-auto bg-white rounded-md">
        <div>
          <Image
            src={bannerSrc}
            alt="Carousel Item Banner"
            width={350}
            height={250}
            className="w-full h-[250px] xs:h-[320px] xs-2:h-[340px] sm-md:h-[250px] md:h-[300px] lg:h-[250px] lg-xl:h-[300px] xl-2xl:h-[350px_!important] rounded-t-md"
          />
        </div>
        <div className="flex flex-col gap-1 p-5 px-2.5 xs:px-5">
          <h5 className="text-primary-text text-xl xs:text-2xl sm-md:text-lg xl-2xl:text-xl">
            {title.length > 25 ? title.slice(0, 25) + "..." : title}
          </h5>
          <div className="flex justify-between gap-5 items-center">
            <div className="text-[#989AA0] fill-[#989AA0] text-base xs:text-[19px] sm-md:text-[15px] xl-2xl:text-[17px] flex items-center gap-3 leading-3">
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width={20}
                    height={20}
                    className="sm-md:w-5 sm-md:h-5 xs:w-[23px] xs:h-[23px] xl-2xl:w-[22px] xl-2xl:h-[22px] w-[21px] h-[21px]"
                  >
                    <path d="M64 96C81.7 96 96 110.3 96 128L96 352L320 352L320 224C320 206.3 334.3 192 352 192L512 192C565 192 608 235 608 288L608 512C608 529.7 593.7 544 576 544C558.3 544 544 529.7 544 512L544 448L96 448L96 512C96 529.7 81.7 544 64 544C46.3 544 32 529.7 32 512L32 128C32 110.3 46.3 96 64 96zM144 256C144 220.7 172.7 192 208 192C243.3 192 272 220.7 272 256C272 291.3 243.3 320 208 320C172.7 320 144 291.3 144 256z" />
                  </svg>
                </span>
                <span>
                  {bedsStr.length > 1 ? bedsStr.slice(0, 2) + "..." : bedsStr}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width={20}
                    height={20}
                    className="sm-md:w-5 sm-md:h-5 xs:w-[23px] xs:h-[23px] xl-2xl:w-[22px] xl-2xl:h-[22px] w-[21px] h-[21px]"
                  >
                    <path d="M160 141.3C160 134 165.9 128 173.3 128C176.8 128 180.2 129.4 182.7 131.9L197.6 146.8C194 155.9 192.1 165.7 192.1 176C192.1 195.9 199.3 214 211.3 228C206 237.2 207.3 249.1 215.1 257C224.5 266.4 239.7 266.4 249 257L353 153C362.4 143.6 362.4 128.4 353 119.1C345.2 111.2 333.2 110 324 115.3C310 103.3 291.9 96.1 272 96.1C261.7 96.1 251.8 98.1 242.8 101.6L227.9 86.6C213.4 72.1 193.7 64 173.3 64C130.6 64 96 98.6 96 141.3L96 320C78.3 320 64 334.3 64 352C64 369.7 78.3 384 96 384L96 432C96 460.4 108.4 486 128 503.6L128 544C128 561.7 142.3 576 160 576C177.7 576 192 561.7 192 544L192 528L448 528L448 544C448 561.7 462.3 576 480 576C497.7 576 512 561.7 512 544L512 503.6C531.6 486 544 460.5 544 432L544 384C561.7 384 576 369.7 576 352C576 334.3 561.7 320 544 320L160 320L160 141.3z" />
                  </svg>
                </span>
                <span>
                  {bathsStr.length > 1
                    ? bathsStr.slice(0, 2) + "..."
                    : bathsStr}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width={20}
                    height={20}
                    className="sm-md:w-5 sm-md:h-5 xs:w-[23px] xs:h-[23px] xl-2xl:w-[22px] xl-2xl:h-[22px] w-[21px] h-[21px]"
                  >
                    <path d="M97 505.7C101.5 527.5 120.8 544 144 544L496 544C522.5 544 544 522.5 544 496L544 400C544 373.5 522.5 352 496 352L448 352L448 424C448 437.3 437.3 448 424 448C410.7 448 400 437.3 400 424L400 352L336 352L336 424C336 437.3 325.3 448 312 448C298.7 448 288 437.3 288 424L288 352L216 352C202.7 352 192 341.3 192 328C192 314.7 202.7 304 216 304L288 304L288 240L216 240C202.7 240 192 229.3 192 216C192 202.7 202.7 192 216 192L288 192L288 144C288 117.5 266.5 96 240 96L144 96C117.5 96 96 117.5 96 144L96 496C96 499.3 96.3 502.6 97 505.7z" />
                  </svg>
                </span>
                <span>
                  {sqftStr.length > 4 ? sqftStr.slice(0, 4) + "..." : sqftStr}
                </span>
              </div>
            </div>
            <div className="text-xl xs:text-2xl xl-2xl:text-xl sm-md:text-lg text-blue-1">
              <p>
                {priceStr.length > 8 ? priceStr.slice(0, 8) + "..." : priceStr}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarouselItem;
