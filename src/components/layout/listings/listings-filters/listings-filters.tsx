import type { FunctionComponent, JSX } from "react";

const ListingsFilters: FunctionComponent<{ area: "toolbar" | "sidebar" }> = ({
  area,
}: {
  area: "toolbar" | "sidebar";
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-5 text-primary-text select-none">
      <input
        type="text"
        placeholder="Search"
        className="py-1.5 px-4 xl-2xl:py-2.5 xl-2xl:px-5 bg-gray-200 outline-none text-base xl-2xl:text-lg"
      />
      <select className="py-2 px-4 xl-2xl:py-3 xl-2xl:px-5 pe-9 bg-gray-200 outline-none text-base xl-2xl:text-lg">
        <option>Select Category</option>
        <option>Buy</option>
        <option>Rent</option>
        <option>Sold</option>
      </select>
      <select className="py-2 px-4 xl-2xl:py-3 xl-2xl:px-5 pe-9 bg-gray-200 outline-none text-base xl-2xl:text-lg">
        <option>Select Type</option>
        <option>Apartments</option>
        <option>Offices</option>
        <option>Townhome</option>
        <option>Houses</option>
        <option>Studio</option>
      </select>
      <select className="py-2 px-4 xl-2xl:py-3 xl-2xl:px-5 pe-9 bg-gray-200 outline-none text-base xl-2xl:text-lg">
        <option>Select Stories</option>
        <option>Multi Family</option>
      </select>
      <select className="py-2 px-4 xl-2xl:py-3 xl-2xl:px-5 pe-9 bg-gray-200 outline-none text-base xl-2xl:text-lg">
        <option>Select City</option>
        <option>Dhaka</option>
        <option>Chottogram</option>
        <option>Sylhet</option>
        <option>Khulna</option>
        <option>Rangpur</option>
        <option>Mymensingh</option>
        <option>Barishal</option>
        <option>Rajshahi</option>
      </select>
      <div>
        <h6 className="py-1.5 px-4 xl-2xl:py-2.5 xl-2xl:px-5 pe-9 bg-gray-200 text-base xl-2xl:text-lg">
          Price
        </h6>
        <div className="mt-5 flex justify-between mx-4">
          <input
            type="text"
            placeholder="Min"
            className={`py-1.5 px-4 xl-2xl:py-2.5 xl-2xl:px-5 bg-gray-200 outline-none text-base xl-2xl:text-lg ${
              area === "toolbar" ? "w-[120px]" : "w-[80px]"
            }`}
          />
          <input
            type="text"
            placeholder="Max"
            className={`py-1.5 px-4 xl-2xl:py-2.5 xl-2xl:px-5 bg-gray-200 outline-none text-base xl-2xl:text-lg ${
              area === "toolbar" ? "w-[120px]" : "w-[80px]"
            }`}
          />
        </div>
      </div>
      <div>
        <h6 className="py-1.5 px-4 xl-2xl:py-2.5 xl-2xl:px-5 pe-9 bg-gray-200 text-base xl-2xl:text-lg">
          Sq ft
        </h6>
        <div className="mt-5 flex justify-between mx-4">
          <input
            type="text"
            placeholder="Min"
            className={`py-1.5 px-4 xl-2xl:py-2.5 xl-2xl:px-5 bg-gray-200 outline-none text-base xl-2xl:text-lg ${
              area === "toolbar" ? "w-[120px]" : "w-[80px]"
            }`}
          />
          <input
            type="text"
            placeholder="Max"
            className={`py-1.5 px-4 xl-2xl:py-2.5 xl-2xl:px-5 bg-gray-200 outline-none text-base xl-2xl:text-lg ${
              area === "toolbar" ? "w-[120px]" : "w-[80px]"
            }`}
          />
        </div>
      </div>
      <div>
        <h6 className="py-1.5 px-4 xl-2xl:py-2.5 xl-2xl:px-5 pe-9 bg-gray-200 text-base xl-2xl:text-lg">
          Beds
        </h6>
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex items-center ml-2.5">
            <input id="checkbox-1" type="checkbox" className="w-5 h-5" />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-base xl-2xl:text-lg"
            >
              2 (1)
            </label>
          </div>
          <div className="flex items-center ml-2.5">
            <input id="checkbox-1" type="checkbox" className="w-5 h-5" />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-base xl-2xl:text-lg"
            >
              2 (1)
            </label>
          </div>
          <div className="flex items-center ml-2.5">
            <input id="checkbox-1" type="checkbox" className="w-5 h-5" />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-base xl-2xl:text-lg"
            >
              2 (1)
            </label>
          </div>
        </div>
      </div>
      <div>
        <h6 className="py-1.5 px-4 xl-2xl:py-2.5 xl-2xl:px-5 pe-9 bg-gray-200 text-base xl-2xl:text-lg">
          Bath
        </h6>
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex items-center ml-2.5">
            <input id="checkbox-1" type="checkbox" className="w-5 h-5" />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-base xl-2xl:text-lg"
            >
              3 (1)
            </label>
          </div>
          <div className="flex items-center ml-2.5">
            <input id="checkbox-1" type="checkbox" className="w-5 h-5" />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-base xl-2xl:text-lg"
            >
              3 (1)
            </label>
          </div>
          <div className="flex items-center ml-2.5">
            <input id="checkbox-1" type="checkbox" className="w-5 h-5" />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-base xl-2xl:text-lg"
            >
              3 (1)
            </label>
          </div>
        </div>
      </div>
      <div>
        <h6 className="py-1.5 px-4 xl-2xl:py-2.5 xl-2xl:px-5 pe-9 bg-gray-200 text-base xl-2xl:text-lg">
          Amenities
        </h6>
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex items-center ml-2.5">
            <input id="checkbox-1" type="checkbox" className="w-5 h-5" />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-base xl-2xl:text-lg"
            >
              Air Conditioning (17)
            </label>
          </div>
          <div className="flex items-center ml-2.5">
            <input id="checkbox-1" type="checkbox" className="w-5 h-5" />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-base xl-2xl:text-lg"
            >
              Air Conditioning (17)
            </label>
          </div>
          <div className="flex items-center ml-2.5">
            <input id="checkbox-1" type="checkbox" className="w-5 h-5" />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-base xl-2xl:text-lg"
            >
              Air Conditioning (17)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsFilters;
