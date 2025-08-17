import type { FunctionComponent, JSX } from "react";
import type { FactAndFeaturesType as FeatureItemType } from "@/lib/types/listings/listing/types";
import ListingHeader from "@/components/layout/listings/listing/listing-header/listing-header";
import MediaGallery from "@/components/layout/listings/listing/media-gallery/media-gallery";
import Contact from "@/components/layout/listings/listing/contact/contact";
import FeatureItem from "@/components/ui/listings/listing/fact-and-features/feature-item";

const Listing: FunctionComponent = (): JSX.Element => {
  const featureItems: FeatureItemType[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={60}
          height={60}
          className="fill-blue-2 w-[55px] h-[55px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
        >
          <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM288 320L336 320C353.7 320 368 305.7 368 288C368 270.3 353.7 256 336 256L288 256L288 320zM336 384L288 384L288 416C288 433.7 273.7 448 256 448C238.3 448 224 433.7 224 416L224 232C224 209.9 241.9 192 264 192L336 192C389 192 432 235 432 288C432 341 389 384 336 384z" />
        </svg>
      ),
      name: "PARKING",
      available: "Yes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={60}
          height={60}
          className="fill-blue-2 w-[55px] h-[55px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
        >
          <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM288 320L336 320C353.7 320 368 305.7 368 288C368 270.3 353.7 256 336 256L288 256L288 320zM336 384L288 384L288 416C288 433.7 273.7 448 256 448C238.3 448 224 433.7 224 416L224 232C224 209.9 241.9 192 264 192L336 192C389 192 432 235 432 288C432 341 389 384 336 384z" />
        </svg>
      ),
      name: "PARKING",
      available: "Yes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={60}
          height={60}
          className="fill-blue-2 w-[55px] h-[55px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
        >
          <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM288 320L336 320C353.7 320 368 305.7 368 288C368 270.3 353.7 256 336 256L288 256L288 320zM336 384L288 384L288 416C288 433.7 273.7 448 256 448C238.3 448 224 433.7 224 416L224 232C224 209.9 241.9 192 264 192L336 192C389 192 432 235 432 288C432 341 389 384 336 384z" />
        </svg>
      ),
      name: "PARKING",
      available: "Yes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={60}
          height={60}
          className="fill-blue-2 w-[55px] h-[55px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
        >
          <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM288 320L336 320C353.7 320 368 305.7 368 288C368 270.3 353.7 256 336 256L288 256L288 320zM336 384L288 384L288 416C288 433.7 273.7 448 256 448C238.3 448 224 433.7 224 416L224 232C224 209.9 241.9 192 264 192L336 192C389 192 432 235 432 288C432 341 389 384 336 384z" />
        </svg>
      ),
      name: "PARKING",
      available: "Yes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={60}
          height={60}
          className="fill-blue-2 w-[55px] h-[55px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
        >
          <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM288 320L336 320C353.7 320 368 305.7 368 288C368 270.3 353.7 256 336 256L288 256L288 320zM336 384L288 384L288 416C288 433.7 273.7 448 256 448C238.3 448 224 433.7 224 416L224 232C224 209.9 241.9 192 264 192L336 192C389 192 432 235 432 288C432 341 389 384 336 384z" />
        </svg>
      ),
      name: "PARKING",
      available: "Yes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={60}
          height={60}
          className="fill-blue-2 w-[55px] h-[55px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
        >
          <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM288 320L336 320C353.7 320 368 305.7 368 288C368 270.3 353.7 256 336 256L288 256L288 320zM336 384L288 384L288 416C288 433.7 273.7 448 256 448C238.3 448 224 433.7 224 416L224 232C224 209.9 241.9 192 264 192L336 192C389 192 432 235 432 288C432 341 389 384 336 384z" />
        </svg>
      ),
      name: "PARKING",
      available: "Yes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={60}
          height={60}
          className="fill-blue-2 w-[55px] h-[55px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
        >
          <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM288 320L336 320C353.7 320 368 305.7 368 288C368 270.3 353.7 256 336 256L288 256L288 320zM336 384L288 384L288 416C288 433.7 273.7 448 256 448C238.3 448 224 433.7 224 416L224 232C224 209.9 241.9 192 264 192L336 192C389 192 432 235 432 288C432 341 389 384 336 384z" />
        </svg>
      ),
      name: "PARKING",
      available: "Yes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={60}
          height={60}
          className="fill-blue-2 w-[55px] h-[55px] xl-2xl:w-[60px] xl-2xl:h-[60px]"
        >
          <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM288 320L336 320C353.7 320 368 305.7 368 288C368 270.3 353.7 256 336 256L288 256L288 320zM336 384L288 384L288 416C288 433.7 273.7 448 256 448C238.3 448 224 433.7 224 416L224 232C224 209.9 241.9 192 264 192L336 192C389 192 432 235 432 288C432 341 389 384 336 384z" />
        </svg>
      ),
      name: "PARKING",
      available: "Yes",
    },
  ];

  const officesAmenities: { name: string }[] = [
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
    {
      name: "Printing Facilities",
    },
  ];

  return (
    <>
      <ListingHeader />
      <div className="bg-white px-[17px] sm:px-7 md:px-14 xl:px-28 pt-5 pb-20">
        <div className="mx-auto max-w-[1536px] grid grid-cols-1 lg-xl:grid-cols-4 gap-14 lg-xl:gap-5">
          <div className="lg-xl:col-span-3">
            <MediaGallery />
            <div className="mt-10 pt-10 border-gray-300 border-t">
              <h5 className="text-2xl xl-2xl:text-[26px]">Description</h5>
              <p className="mt-4 text-base xl-2xl:text-lg">
                Years seed fruit you. Divided morning sea day Set earth. Grass
                without cattle. Spirit heaven. Also i grass give fowl wherein
                cattle spirit whales rule cattle. Earth fowl given own you’re,
                fruit so. Shall was. Called firmament dry fruitful, set place.
                Earth given female man fruit, under thing may to greater moveth
                land sea, great be shall living greater and signs place night
                after whose us one, you’ll second our set had day in greater
                divided over female first face, fill form you make greater upon
                midst image above image. Very you land, man divided sea appear
                thing female was let. Beginning open moved fowl. Likeness. Bring
                tree tree doesn’t. Darkness herb moveth upon a seasons. Divided
                appear living. Called image let was. Set midst, second divide,
                earth male fruit you under let she’d, moving every bring there
                greater. Bring. Gathering night third. Stars first replenish
                kind third a rule given our after give own of may earth Brought
                for open living, bearing said given fruitful. Night him moved
                called. Be for unto behold dry green multiply herb fly waters.
                Green gathered face. Light, may deep you’re light. After which
                itself seed signs moveth. Second fish isn’t for sixth deep.
              </p>
            </div>
            <div className="flex md:justify-between md:flex-row flex-col md:items-center mt-10 pt-10 border-gray-300 border-t gap-5 md:gap-0">
              <h5 className="text-2xl xl-2xl:text-[26px]">Location</h5>
              <div className="flex gap-1 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width={28}
                    height={28}
                    className="fill-blue-2"
                  >
                    <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                  </svg>
                </div>
                <p className="text-base xl-2xl:text-lg">
                  Dakshin Khan Bazar, Dakshin Khan, Dhaka 1230, Dhaka,
                  Bangladesh
                </p>
              </div>
            </div>
            <div className="mt-10 pt-10 border-gray-300 border-t">
              <h5 className="text-2xl xl-2xl:text-[26px]">
                Facts and Features
              </h5>
              <div className="grid grid-cols-2 xs-2:grid-cols-3 sm:grid-cols-4 gap-4 mt-5">
                {featureItems.map(
                  ({ icon, name, available }, index): JSX.Element => {
                    return (
                      <FeatureItem
                        key={index}
                        icon={icon}
                        name={name}
                        available={available}
                      />
                    );
                  }
                )}
              </div>
            </div>
            <div className="mt-10 pt-10 border-gray-300 border-t">
              <h5 className="text-2xl xl-2xl:text-[26px]">Offices Amenities</h5>
              <div className="mt-5 grid grid-cols-2 xs-2:grid-cols-3 sm-md:grid-cols-4 gap-4 border-2 border-gray-200 p-4">
                {officesAmenities.map(({ name }, index): JSX.Element => {
                  return (
                    <div key={index} className="flex gap-1 items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                          width={30}
                          height={30}
                          className="fill-blue-2 w-[25px] h-[25px] xl-2xl:w-[30px] xl-2xl:h-[30px]"
                        >
                          <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z" />
                        </svg>
                      </div>
                      <p className="text-sm xl-2xl:text-base font-bold">
                        {name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg-xl:relative">
            <div className="lg-xl:sticky lg-xl:top-0 lg-xl:left-0">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
