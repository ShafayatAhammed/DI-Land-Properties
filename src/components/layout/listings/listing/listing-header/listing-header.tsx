import type { FunctionComponent, JSX } from "react";
import Link from "next/link";

const ListingHeader: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 mt-[25px]">
      <div className="mx-auto max-w-[1536px] text-primary-text">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
          <div className="flex flex-col xs:flex-row gap-4 items-center">
            <div>
              <div className="flex gap-2 text-[10px]">
                <div className="bg-blue-1 py-0.5 px-1 rounded-sm">
                  <p className="text-white xl-2xl:text-xs font-bold">
                    FEATURED
                  </p>
                </div>
                <div className="bg-blue-2 py-0.5 px-1 rounded-sm">
                  <p className="text-white xl-2xl:text-xs font-bold">
                    APARTMENTS
                  </p>
                </div>
                <div className="bg-red-400 py-0.5 px-1 rounded-sm">
                  <p className="text-white xl-2xl:text-xs font-bold">BUY</p>
                </div>
              </div>
            </div>
            <div className="fill-primary-text text-sm xl-2xl:text-lg flex gap-3">
              <div className="flex gap-1 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width={22}
                    height={22}
                    className="w-[18px] h-[18px] xl-2xl:w-[22px] xl-2xl:h-[22px]"
                  >
                    <path d="M320 128C426 128 512 214 512 320C512 426 426 512 320 512C254.8 512 197.1 479.5 162.4 429.7C152.3 415.2 132.3 411.7 117.8 421.8C103.3 431.9 99.8 451.9 109.9 466.4C156.1 532.6 233 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C234.3 64 158.5 106.1 112 170.7L112 144C112 126.3 97.7 112 80 112C62.3 112 48 126.3 48 144L48 256C48 273.7 62.3 288 80 288L104.6 288C105.1 288 105.6 288 106.1 288L192.1 288C209.8 288 224.1 273.7 224.1 256C224.1 238.3 209.8 224 192.1 224L153.8 224C186.9 166.6 249 128 320 128zM344 216C344 202.7 333.3 192 320 192C306.7 192 296 202.7 296 216L296 320C296 326.4 298.5 332.5 303 337L375 409C384.4 418.4 399.6 418.4 408.9 409C418.2 399.6 418.3 384.4 408.9 375.1L343.9 310.1L343.9 216z" />
                  </svg>
                </div>
                <p>7 years ago</p>
              </div>
              <span>|</span>
              <div className="flex gap-1 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width={22}
                    height={22}
                    className="w-[18px] h-[18px] xl-2xl:w-[22px] xl-2xl:h-[22px]"
                  >
                    <path d="M320 96C239.2 96 174.5 132.8 127.4 176.6C80.6 220.1 49.3 272 34.4 307.7C31.1 315.6 31.1 324.4 34.4 332.3C49.3 368 80.6 420 127.4 463.4C174.5 507.1 239.2 544 320 544C400.8 544 465.5 507.2 512.6 463.4C559.4 419.9 590.7 368 605.6 332.3C608.9 324.4 608.9 315.6 605.6 307.7C590.7 272 559.4 220 512.6 176.6C465.5 132.9 400.8 96 320 96zM176 320C176 240.5 240.5 176 320 176C399.5 176 464 240.5 464 320C464 399.5 399.5 464 320 464C240.5 464 176 399.5 176 320zM320 256C320 291.3 291.3 320 256 320C244.5 320 233.7 317 224.3 311.6C223.3 322.5 224.2 333.7 227.2 344.8C240.9 396 293.6 426.4 344.8 412.7C396 399 426.4 346.3 412.7 295.1C400.5 249.4 357.2 220.3 311.6 224.3C316.9 233.6 320 244.4 320 256z" />
                  </svg>
                </div>
                <p>5206</p>
              </div>
            </div>
          </div>
          <div className="fill-primary-text flex gap-4 items-center text-sm xl-2xl:text-lg">
            <Link href="/" className="flex items-center gap-1.5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={24}
                  height={24}
                  className="w-[20px] h-[20px] xl-2xl:w-[24px] xl-2xl:h-[24px]"
                >
                  <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
                </svg>
              </div>
              <p>Email</p>
            </Link>
            <button
              type="button"
              className="flex items-center gap-1.5 cursor-pointer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={24}
                  height={24}
                  className="w-[20px] h-[20px] xl-2xl:w-[24px] xl-2xl:h-[24px]"
                >
                  <path d="M448 256C501 256 544 213 544 160C544 107 501 64 448 64C395 64 352 107 352 160C352 165.4 352.5 170.8 353.3 176L223.6 248.1C206.7 233.1 184.4 224 160 224C107 224 64 267 64 320C64 373 107 416 160 416C184.4 416 206.6 406.9 223.6 391.9L353.3 464C352.4 469.2 352 474.5 352 480C352 533 395 576 448 576C501 576 544 533 544 480C544 427 501 384 448 384C423.6 384 401.4 393.1 384.4 408.1L254.7 336C255.6 330.8 256 325.5 256 320C256 314.5 255.5 309.2 254.7 304L384.4 231.9C401.3 246.9 423.6 256 448 256z" />
                </svg>
              </div>
              <p>Share</p>
            </button>
          </div>
        </div>
        <div className="mt-3 flex flex-col items-center gap-4 lg-xl:items-start lg-xl:flex-row lg-xl:justify-between text-center lg-xl:text-start">
          <h2 className="text-3xl xl-2xl:text-4xl">Awesome family Apartment</h2>
          <div className="fill-blue-2 w-full sm:w-auto flex sm:gap-16 lg-xl:gap-[32px_!important] justify-between sm:justify-center text-center text-base xl-2xl:text-lg">
            <div className="flex flex-col items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={35}
                height={35}
                className="w-[30px] h-[30px] xl-2xl:w-[35px] xl-2xl:h-[35px]"
              >
                <path d="M64 96C81.7 96 96 110.3 96 128L96 352L320 352L320 224C320 206.3 334.3 192 352 192L512 192C565 192 608 235 608 288L608 512C608 529.7 593.7 544 576 544C558.3 544 544 529.7 544 512L544 448L96 448L96 512C96 529.7 81.7 544 64 544C46.3 544 32 529.7 32 512L32 128C32 110.3 46.3 96 64 96zM144 256C144 220.7 172.7 192 208 192C243.3 192 272 220.7 272 256C272 291.3 243.3 320 208 320C172.7 320 144 291.3 144 256z" />
              </svg>
              <p>2 Beds</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={35}
                height={35}
                className="w-[30px] h-[30px] xl-2xl:w-[35px] xl-2xl:h-[35px]"
              >
                <path d="M160 141.3C160 134 165.9 128 173.3 128C176.8 128 180.2 129.4 182.7 131.9L197.6 146.8C194 155.9 192.1 165.7 192.1 176C192.1 195.9 199.3 214 211.3 228C206 237.2 207.3 249.1 215.1 257C224.5 266.4 239.7 266.4 249 257L353 153C362.4 143.6 362.4 128.4 353 119.1C345.2 111.2 333.2 110 324 115.3C310 103.3 291.9 96.1 272 96.1C261.7 96.1 251.8 98.1 242.8 101.6L227.9 86.6C213.4 72.1 193.7 64 173.3 64C130.6 64 96 98.6 96 141.3L96 320C78.3 320 64 334.3 64 352C64 369.7 78.3 384 96 384L96 432C96 460.4 108.4 486 128 503.6L128 544C128 561.7 142.3 576 160 576C177.7 576 192 561.7 192 544L192 528L448 528L448 544C448 561.7 462.3 576 480 576C497.7 576 512 561.7 512 544L512 503.6C531.6 486 544 460.5 544 432L544 384C561.7 384 576 369.7 576 352C576 334.3 561.7 320 544 320L160 320L160 141.3z" />
              </svg>
              <p>3 Baths</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={35}
                height={35}
                className="w-[30px] h-[30px] xl-2xl:w-[35px] xl-2xl:h-[35px]"
              >
                <path d="M32 206.1L32 544C32 561.7 46.3 576 64 576C81.7 576 96 561.7 96 544L96 304C96 286.3 110.3 272 128 272L512 272C529.7 272 544 286.3 544 304L544 544C544 561.7 558.3 576 576 576C593.7 576 608 561.7 608 544L608 206.1C608 178.6 590.4 154.1 564.2 145.4L335.2 69.1C325.3 65.8 314.7 65.8 304.8 69.1L75.8 145.4C49.6 154.1 32 178.6 32 206.1zM496 320L144 320L144 384L496 384L496 320zM144 480L496 480L496 416L144 416L144 480zM496 512L144 512L144 576L496 576L496 512z" />
              </svg>
              <p>1 Garage</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={35}
                height={35}
                className="w-[30px] h-[30px] xl-2xl:w-[35px] xl-2xl:h-[35px]"
              >
                <path d="M97 505.7C101.5 527.5 120.8 544 144 544L496 544C522.5 544 544 522.5 544 496L544 400C544 373.5 522.5 352 496 352L448 352L448 424C448 437.3 437.3 448 424 448C410.7 448 400 437.3 400 424L400 352L336 352L336 424C336 437.3 325.3 448 312 448C298.7 448 288 437.3 288 424L288 352L216 352C202.7 352 192 341.3 192 328C192 314.7 202.7 304 216 304L288 304L288 240L216 240C202.7 240 192 229.3 192 216C192 202.7 202.7 192 216 192L288 192L288 144C288 117.5 266.5 96 240 96L144 96C117.5 96 96 117.5 96 144L96 496C96 499.3 96.3 502.6 97 505.7z" />
              </svg>
              <p>3556 sq ft</p>
            </div>
          </div>
          <div className="flex items-center gap-4 font-bold">
            <del className="text-gray-400 text-base xl-2xl:text-lg">
              $50,000
            </del>
            <p className="text-3xl xl-2xl:text-4xl">$35,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingHeader;
