import type { FunctionComponent, JSX } from "react";
import type { ListingType as ListingCardProps } from "@/lib/types/listing/types";
import Link from "next/link";
import Image from "next/image";

const ListingCard: FunctionComponent<ListingCardProps> = ({
  bannerSrc,
  title,
  price,
  discountPrice,
  beds,
  baths,
  built,
  parkings,
}: ListingCardProps): JSX.Element => {
  const bedsStr = beds.toString();
  const bathsStr = baths.toString();
  const builtStr = built.toString();
  const parkingsStr = parkings.toString();

  return (
    <Link
      href="/"
      className="select-none inline-block w-full h-fit border border-gray-200 p-3 group"
    >
      <div className="relative">
        <Image
          src={bannerSrc}
          alt="Listing Card Banner"
          width={348}
          height={260}
          className="w-full aspect-[16/12]"
        />
        <div className="absolute top-0 left-0 m-2 flex gap-2">
          <div className="bg-blue-1 py-0.5 px-1 rounded-sm">
            <p className="text-white text-[10px] xl-2xl:text-xs font-bold">
              FEATURED
            </p>
          </div>
          <div className="bg-blue-2 py-0.5 px-1 rounded-sm">
            <p className="text-white text-[10px] xl-2xl:text-xs font-bold">
              APARTMENTS
            </p>
          </div>
          <div className="bg-red-400 py-0.5 px-1 rounded-sm">
            <p className="text-white text-[10px] xl-2xl:text-xs font-bold">
              BUY
            </p>
          </div>
        </div>
      </div>
      <div className="text-primary-text font-bold mt-3">
        <h5 className="text-[22px] xs-2:text-lg xl-2xl:text-xl group-hover:text-blue-1 transition-colors">
          {title.length > 26 ? title.slice(0, 26) : title}
        </h5>
        {discountPrice ? (
          <div className="flex items-center gap-2">
            <del className="text-gray-400 text-sm xs-2:text-xs xl-2xl:text-sm">
              {discountPrice.length > 8
                ? discountPrice.slice(0, 8)
                : discountPrice}
            </del>
            <p className="text-lg xs-2:text-base xl-2xl:text-lg">
              {price.length > 8 ? price.slice(0, 8) : price}
            </p>
          </div>
        ) : (
          <p className="text-lg xs-2:text-base xl-2xl:text-lg">
            {price.length > 8 ? price.slice(0, 8) : price}
          </p>
        )}
      </div>
      <div className="border-t border-gray-200 mt-3 py-3 flex gap-3 items-center">
        <div className="flex items-center gap-1.5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={29}
              height={29}
              className="fill-gray-400 w-[29px] h-[29px] xs-2:w-[23px] xs-2:h-[23px] xl-2xl:w-[26px] xl-2xl:h-[26px] group-hover:fill-blue-1 transition-colors"
            >
              <path d="M64 96C81.7 96 96 110.3 96 128L96 352L320 352L320 224C320 206.3 334.3 192 352 192L512 192C565 192 608 235 608 288L608 512C608 529.7 593.7 544 576 544C558.3 544 544 529.7 544 512L544 448L96 448L96 512C96 529.7 81.7 544 64 544C46.3 544 32 529.7 32 512L32 128C32 110.3 46.3 96 64 96zM144 256C144 220.7 172.7 192 208 192C243.3 192 272 220.7 272 256C272 291.3 243.3 320 208 320C172.7 320 144 291.3 144 256z" />
            </svg>
          </span>
          <span className="text-gray-400 text-lg xs-2:text-base xl-2xl:text-lg">
            {bedsStr.length > 1 ? bedsStr.slice(0, 1) : bedsStr}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={29}
              height={29}
              className="fill-gray-400 w-[29px] h-[29px] xs-2:w-[23px] xs-2:h-[23px] xl-2xl:w-[26px] xl-2xl:h-[26px] group-hover:fill-blue-1 transition-colors"
            >
              <path d="M160 141.3C160 134 165.9 128 173.3 128C176.8 128 180.2 129.4 182.7 131.9L197.6 146.8C194 155.9 192.1 165.7 192.1 176C192.1 195.9 199.3 214 211.3 228C206 237.2 207.3 249.1 215.1 257C224.5 266.4 239.7 266.4 249 257L353 153C362.4 143.6 362.4 128.4 353 119.1C345.2 111.2 333.2 110 324 115.3C310 103.3 291.9 96.1 272 96.1C261.7 96.1 251.8 98.1 242.8 101.6L227.9 86.6C213.4 72.1 193.7 64 173.3 64C130.6 64 96 98.6 96 141.3L96 320C78.3 320 64 334.3 64 352C64 369.7 78.3 384 96 384L96 432C96 460.4 108.4 486 128 503.6L128 544C128 561.7 142.3 576 160 576C177.7 576 192 561.7 192 544L192 528L448 528L448 544C448 561.7 462.3 576 480 576C497.7 576 512 561.7 512 544L512 503.6C531.6 486 544 460.5 544 432L544 384C561.7 384 576 369.7 576 352C576 334.3 561.7 320 544 320L160 320L160 141.3z" />
            </svg>
          </span>
          <span className="text-gray-400 text-lg xs-2:text-base xl-2xl:text-lg">
            {bathsStr.length > 1 ? bathsStr.slice(0, 1) : bathsStr}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={29}
              height={29}
              className="fill-gray-400 w-[29px] h-[29px] xs-2:w-[23px] xs-2:h-[23px] xl-2xl:w-[26px] xl-2xl:h-[26px] group-hover:fill-blue-1 transition-colors"
            >
              <path d="M439.9 245.4L309.3 376L374.6 441.4C382.5 449.3 385.7 460.8 383 471.7C380.3 482.6 372.2 491.3 361.5 494.6L105.5 574.6C94.1 578.1 81.7 575.1 73.3 566.7C64.9 558.3 61.8 545.9 65.4 534.5L145.4 278.5C148.7 267.8 157.4 259.6 168.3 257C179.2 254.4 190.7 257.5 198.6 265.4L264 330.7L394.6 200.1C380.3 185.5 380.4 162.1 394.9 147.6L490.3 52.2C517.2 25.3 560.8 25.3 587.8 52.2C614.8 79.1 614.7 122.7 587.8 149.7L492.4 245.1C477.9 259.6 454.5 259.7 439.9 245.4z" />
            </svg>
          </span>
          <span className="text-gray-400 text-lg xs-2:text-base xl-2xl:text-lg">
            {builtStr}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={29}
              height={29}
              className="fill-gray-400 w-[29px] h-[29px] xs-2:w-[23px] xs-2:h-[23px] xl-2xl:w-[26px] xl-2xl:h-[26px] group-hover:fill-blue-1 transition-colors"
            >
              <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM288 320L336 320C353.7 320 368 305.7 368 288C368 270.3 353.7 256 336 256L288 256L288 320zM336 384L288 384L288 416C288 433.7 273.7 448 256 448C238.3 448 224 433.7 224 416L224 232C224 209.9 241.9 192 264 192L336 192C389 192 432 235 432 288C432 341 389 384 336 384z" />
            </svg>
          </span>
          <span className="text-gray-400 text-lg xs-2:text-base xl-2xl:text-lg">
            {parkingsStr.length > 1 ? parkingsStr.slice(0, 1) : parkingsStr}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
