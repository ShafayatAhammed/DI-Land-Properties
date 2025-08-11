import type { FunctionComponent, JSX, RefObject } from "react";
import SwiperType from "swiper";

interface SlideButtonProps {
  name: "next" | "prev";
  swiperRef: RefObject<SwiperType | null>;
}

const CarouselButton: FunctionComponent<SlideButtonProps> = ({
  name,
  swiperRef,
}: SlideButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className="w-[50px] h-[50px] xl-2xl:w-[60px] xl-2xl:h-[60px] border-2 border-blue-1 rounded-full flex justify-center items-center cursor-pointer bg-white hover:bg-blue-1 fill-blue-1 hover:fill-white transition-colors outline-none"
      onClick={() => {
        if (name === "next") {
          swiperRef.current!.slideNext();
        } else {
          swiperRef.current!.slidePrev();
        }
      }}
    >
      {(name === "prev" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={25}
          height={25}
          className="xl-2xl:w-[30px] xl-2xl:h-[30px]"
        >
          <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
        </svg>
      )) || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={25}
          height={25}
          className="xl-2xl:w-[30px] xl-2xl:h-[30px]"
        >
          <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" />
        </svg>
      )}
    </button>
  );
};

export default CarouselButton;
