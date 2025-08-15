import type { FunctionComponent, JSX } from "react";

const InquiryForm: FunctionComponent = (): JSX.Element => {
  return (
    <form className="text-primary-text flex flex-col gap-4">
      <div>
        <label htmlFor="inquiry-type" className="block text-lg xl-2xl:text-xl">
          Inquiry Type
        </label>
        <select
          id="inquiry-type"
          className="py-3 px-4 xl-2xl:py-4 xl-2xl:px-5 pe-9 w-full border border-gray-200 rounded-lg outline-none mt-2 text-base xl-2xl:text-lg"
        >
          <option>Select value</option>
          <option>Apartments</option>
          <option>Offices</option>
          <option>Houses</option>
          <option>Studios</option>
        </select>
      </div>
      <div>
        <label htmlFor="personal-info" className="block text-lg xl-2xl:text-xl">
          Personal Info
        </label>
        <div className="mt-2 grid md:grid-cols-2 gap-4 md:gap-8">
          <select
            id="personal-info"
            className="py-3 px-4 xl-2xl:py-4 xl-2xl:px-5 pe-9 border border-gray-200 rounded-lg outline-none text-base xl-2xl:text-lg"
          >
            <option>Select</option>
            <option>Buyer</option>
            <option>Agent</option>
          </select>
          <input
            type="text"
            id="personal-info"
            className="py-2.5 px-5 xl-2xl:py-3.5 xl-2xl:px-6 border border-gray-200 rounded-lg outline-none text-base xl-2xl:text-lg"
            placeholder="Your Name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-lg xl-2xl:text-xl">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="py-2.5 px-5 xl-2xl:py-3.5 xl-2xl:px-6 border w-full border-gray-200 rounded-lg outline-none mt-2 text-base xl-2xl:text-lg"
          placeholder="Your Email"
        />
      </div>
      <div>
        <label
          htmlFor="how-to-address-you"
          className="block text-lg xl-2xl:text-xl"
        >
          How To Address You
        </label>
        <select
          id="how-to-address-you"
          className="py-3 px-4 xl-2xl:py-4 xl-2xl:px-5 pe-9 border border-gray-200 rounded-lg outline-none mt-2 w-full text-base xl-2xl:text-lg"
        >
          <option>Select</option>
          <option>Mr</option>
          <option>Mrs</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <input
          type="text"
          className="py-2.5 px-5 xl-2xl:py-3.5 xl-2xl:px-6 border border-gray-200 rounded-lg outline-none text-base xl-2xl:text-lg"
          placeholder="Max price"
        />
        <input
          type="text"
          className="py-2.5 px-5 xl-2xl:py-3.5 xl-2xl:px-6 border border-gray-200 rounded-lg outline-none text-base xl-2xl:text-lg"
          placeholder="Minimum size (Sq Ft)"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-1 rounded-lg hover:bg-blue-2 transition-colors text-white py-3 cursor-pointer text-base xl-2xl:text-lg outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default InquiryForm;
