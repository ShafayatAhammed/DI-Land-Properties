"use client";

import type { FunctionComponent, JSX } from "react";
import type { ContactsType as ContactItemProps } from "@/lib/types/contact/types";
import Image from "next/image";
import Link from "next/link";

const ContactItem: FunctionComponent<ContactItemProps> = ({
  picSrc,
  picAlt,
  name,
  position,
  email,
  skype,
}: ContactItemProps): JSX.Element => {
  return (
    <div className="flex flex-col sm:items-start items-center sm:flex-row gap-5 sm:gap-10 lg-xl-2:gap-6 text-primary-text">
      <div>
        <Image
          src={picSrc}
          alt={picAlt}
          width={150}
          height={150}
          className="w-[150px] h-[150px] lg-xl-2:w-[100px] lg-xl-2:h-[100px] xl-2xl:w-[110px] xl-2xl:h-[110px] border-2 border-gray-200"
        />
      </div>
      <div className="text-center sm:text-start">
        <h5 className="text-xl lg-xl-2:text-lg xl-2xl:text-xl">{name}</h5>
        <p className="text-[15px] lg-xl-2:text-[13px] mt-1 xl-2xl:text-[15px]">
          {position}
        </p>
        <p className="text-[15px] lg-xl-2:text-[13px] mt-2 xl-2xl:text-[15px]">
          Email:{" "}
          <Link
            href={`mailto:${email}`}
            className="text-blue-1 hover:underline"
          >
            {email}
          </Link>
        </p>
        <p className="text-[15px] lg-xl-2:text-[13px] mt-1 xl-2xl:text-[15px]">
          Skype:{" "}
          <Link
            href={`skype:${skype}?call`}
            className="text-blue-1 hover:underline"
          >
            {skype}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactItem;
