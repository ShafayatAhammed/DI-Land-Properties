import type { FunctionComponent, JSX } from "react";
import ListingFilters from "../listing-filters/listing-filters";

const ListingToolbar: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 mt-[50px]">
      <div className="mx-auto max-w-[1536px] text-primary-text pb-10 lg-xl-2:pb-0 border-b border-gray-200 lg-xl-2:border-none">
        <div className="sm:grid sm:grid-cols-4">
          <div className="sm:pb-5 text-center sm:text-start">
            <h2 className="text-[40px] xl-2xl:text-[45px] leading-8.5 xl-2xl:leading-11">
              Listing
            </h2>
            <p className="text-sm xl-2xl:text-base mt-1">20 results</p>
          </div>
          <div className="lg-xl-2:border-b lg-xl-2:border-gray-300 col-span-3 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3 sm:gap-8 mt-3 sm:mt-0">
            <button
              type="button"
              className="text-sm xl-2xl:text-base flex items-center gap-1.5 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={22}
                height={22}
                className="fill-primary-text w-[18px] h-[18px] xl-2xl:w-[22px] xl-2xl:h-[22px]"
              >
                <path d="M544.1 256L552 256C565.3 256 576 245.3 576 232L576 88C576 78.3 570.2 69.5 561.2 65.8C552.2 62.1 541.9 64.2 535 71L483.3 122.8C439 86.1 382 64 320 64C191 64 84.3 159.4 66.6 283.5C64.1 301 76.2 317.2 93.7 319.7C111.2 322.2 127.4 310 129.9 292.6C143.2 199.5 223.3 128 320 128C364.4 128 405.2 143 437.7 168.3L391 215C384.1 221.9 382.1 232.2 385.8 241.2C389.5 250.2 398.3 256 408 256L544.1 256zM573.5 356.5C576 339 563.8 322.8 546.4 320.3C529 317.8 512.7 330 510.2 347.4C496.9 440.4 416.8 511.9 320.1 511.9C275.7 511.9 234.9 496.9 202.4 471.6L249 425C255.9 418.1 257.9 407.8 254.2 398.8C250.5 389.8 241.7 384 232 384L88 384C74.7 384 64 394.7 64 408L64 552C64 561.7 69.8 570.5 78.8 574.2C87.8 577.9 98.1 575.8 105 569L156.8 517.2C201 553.9 258 576 320 576C449 576 555.7 480.6 573.4 356.5z" />
              </svg>
              <p>Reset Search</p>
            </button>
            <div>
              <select className="py-2 px-4 xl-2xl:py-3 xl-2xl:px-5 pe-9 bg-gray-200 outline-none text-base xl-2xl:text-lg">
                <option>Newest</option>
                <option>Price (Lo-Hi)</option>
                <option>Price (Hi-Lo)</option>
                <option>Lowest SqFt</option>
                <option>Largest SqFt</option>
              </select>
            </div>
          </div>
        </div>
        <div className="lg-xl-2:hidden mt-5 sm:mt-0">
          <ListingFilters area="toolbar" />
        </div>
      </div>
    </section>
  );
};

export default ListingToolbar;
