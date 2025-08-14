import type { FunctionComponent, JSX } from "react";
import type { LeadershipType } from "@/lib/types/about-us/types";
import LeadershipItem from "@/components/ui/about-us/leadership/leadership-item";

const Leadership: FunctionComponent = (): JSX.Element => {
  const leadership: LeadershipType[] = [
    {
      picSrc: "/staff-1.jpg",
      name: "Rich Wacksman",
      position: "Co-Founder and Executive Chairman",
      mobile: "(866) 234-5678",
      office: "(879) 822-3301",
      fax: "(879) 823-3302",
      fb: "https://www.facebook.com",
      x: "https://www.x.com",
      insta: "https://www.instagram.com",
      lkin: "https://www.linkedin.com",
      email: "wacksman@dilandproperties.com",
    },
    {
      picSrc: "/staff-2.jpg",
      name: "Jennifer Barton",
      position: "Senior Vice President, Product",
      mobile: "(866) 234-5678",
      office: "(879) 822-3301",
      fax: "(879) 823-3302",
      fb: "https://www.facebook.com",
      x: "https://www.x.com",
      insta: "https://www.instagram.com",
      lkin: "https://www.linkedin.com",
      email: "barton@dilandproperties.com",
    },
    {
      picSrc: "/staff-3.jpg",
      name: "Nick Swift",
      position: "Chief Technology Officer",
      mobile: "(865) 234-5679",
      office: "(875) 822-3356",
      fax: "(874) 823-3312",
      fb: "https://www.facebook.com",
      x: "https://www.x.com",
      insta: "https://www.instagram.com",
      lkin: "https://www.linkedin.com",
      email: "swift@dilandproperties.com",
    },
    {
      picSrc: "/staff-4.jpg",
      name: "Kathleen Myers",
      position: "Chief Operating Officer",
      mobile: "(866) 123-4567",
      office: "(879) 711-2290",
      fax: "(879) 712-2291",
      fb: "https://www.facebook.com",
      x: "https://www.x.com",
      insta: "https://www.instagram.com",
      lkin: "https://www.linkedin.com",
      email: "myers@dilandproperties.com",
    },
    {
      picSrc: "/staff-5.jpg",
      name: "Donald Lloyd",
      position: "Chief Analytics Officer",
      mobile: "(866) 234-5678",
      office: "(879) 822-3301",
      fax: "(879) 823-3302",
      fb: "https://www.facebook.com",
      x: "https://www.x.com",
      insta: "https://www.instagram.com",
      lkin: "https://www.linkedin.com",
      email: "lloyd@dilandproperties.com",
    },
    {
      picSrc: "/staff-6.jpg",
      name: "Amanda Reiter",
      position: "Chief Legal Officer",
      mobile: "(865) 123-4567",
      office: "(879) 711-2290",
      fax: "(879) 712-2291",
      fb: "https://www.facebook.com",
      x: "https://www.x.com",
      insta: "https://www.instagram.com",
      lkin: "https://www.linkedin.com",
      email: "reiter@dilandproperties.com",
    },
  ];

  return (
    <section className="bg-[#f0f4f7] px-[17px] sm:px-7 md:px-14 xl:px-28 py-20">
      <div className="mx-auto max-w-[1536px] text-primary-text">
        <h3 className="text-2xl xl-2xl:text-[28px]">Our Leadership</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map(
            ({
              picSrc,
              name,
              position,
              mobile,
              office,
              fax,
              fb,
              x,
              lkin,
              insta,
              email,
            }): JSX.Element => {
              return (
                <LeadershipItem
                  key={name}
                  picSrc={picSrc}
                  name={name}
                  position={position}
                  mobile={mobile}
                  office={office}
                  fax={fax}
                  fb={fb}
                  x={x}
                  lkin={lkin}
                  insta={insta}
                  email={email}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
