import type { FunctionComponent, JSX } from "react";

const SearchArea: FunctionComponent = (): JSX.Element => {
  return (
    <section className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 py-10">
      <form className="mx-auto max-w-[1536px] grid lg:grid-cols-5 gap-4">
        <select className="py-3 px-4 xl-2xl:py-4 xl-2xl:px-5 pe-9 border-2 border-gray-200 rounded-lg outline-none text-[15px] xl-2xl:text-[17px]">
          <option>Buy</option>
          <option>Rent</option>
          <option>Sold</option>
        </select>
        <select className="py-3 px-4 xl-2xl:py-4 xl-2xl:px-5 pe-9 border-2 border-gray-200 rounded-lg outline-none text-[15px] xl-2xl:text-[17px]">
          <option>Apartments</option>
          <option>Offices</option>
          <option>Townhome</option>
          <option>Houses</option>
          <option>Studio</option>
        </select>
        <input
          type="email"
          className="py-2.5 px-5 xl-2xl:py-3.5 xl-2xl:px-6 border-2 border-gray-200 rounded-lg outline-none text-[15px] xl-2xl:text-[17px] lg:col-span-2"
          placeholder="Search"
        />
        <button
          type="submit"
          className="bg-blue-1 rounded-lg hover:bg-blue-2 transition-colors text-white py-3 cursor-pointer text-[15px] xl-2xl:text-[17px] outline-none flex items-center gap-1 justify-center leading-3.5"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={25}
              height={25}
              className="fill-white w-[20px] h-[20px] xl-2xl:w-[25px] xl-2xl:h-[25px]"
            >
              <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
            </svg>
          </div>
          <p className="mt-1">Search</p>
        </button>
      </form>
    </section>
  );
};

export default SearchArea;
