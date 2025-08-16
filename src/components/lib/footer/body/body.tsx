import type { FunctionComponent, JSX } from "react";
import BodyItem from "@/components/ui/footer/body/body-item";
import Link from "next/link";

const Body: FunctionComponent = (): JSX.Element => {
  return (
    <section className="mt-5 text-sm xl-2xl:text-base text-[#FFFFFFCC] grid md:grid-cols-2 lg-xl:[grid-template-columns:repeat(4,minmax(0,1fr))_!important] gap-10 pb-5 border-b border-gray-500">
      <BodyItem
        title="ABOUT"
        content={
          <p>
            Fusce quis tellus nulla. Donec sodales mauris eget pellentesque
            hendrerit. Donec molestie non urna sit amet aliquet. Curabitur sit
            amet est nec nulla varius fermentum.
          </p>
        }
      />
      <BodyItem
        title="CONTACT INFO"
        content={
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p>Call-centre: 1 (323) 938-5798</p>
              <p>Fax: 1 (888) 637-7262</p>
              <p>Email: info@dilandproperties.com</p>
            </div>
            <div className="flex flex-col gap-1">
              <address className="flex flex-col gap-1">
                <p>Dakshin Khan Bazar, Dakshin Khan </p>
                <p>Dhaka 1230, Dhaka, Bangladesh.</p>
              </address>
              <p>Saturday – Friday : 10:00am – 10:00pm</p>
            </div>
          </div>
        }
      />
      <BodyItem
        title="REAL ESTATE MARKERS"
        content={
          <div className="flex flex-col gap-1">
            <div>
              <Link
                href="/blog"
                className="hover:underline hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
            <div>
              <Link
                href="/about-us"
                className="hover:underline hover:text-white transition-colors"
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                href="/contact-us"
                className="hover:underline hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div>
              <Link
                href="/privacy-policy"
                className="hover:underline hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        }
      />
      <BodyItem
        title="INFORMATION"
        content={
          <div className="flex flex-col gap-1">
            <div>
              <Link
                href="/"
                className="hover:underline hover:text-white transition-colors"
              >
                Apartment for Rent
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="hover:underline hover:text-white transition-colors"
              >
                Apartment Low to Hide
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="hover:underline hover:text-white transition-colors"
              >
                Offices for Buy
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="hover:underline hover:text-white transition-colors"
              >
                Offices for Rent
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="hover:underline hover:text-white transition-colors"
              >
                Townhome Hide to Low
              </Link>
            </div>
          </div>
        }
      />
    </section>
  );
};

export default Body;
