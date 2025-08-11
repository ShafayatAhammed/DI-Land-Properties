import type { FunctionComponent, JSX } from "react";
import ContactItem from "../../../../components/ui/contact-us/contact/contacts/contact-item";

interface Contacts {
  picSrc: string;
  picAlt: string;
  name: string;
  position: string;
  email: string;
  skype: string;
}

const Contacts: FunctionComponent = (): JSX.Element => {
  const contacts: Contacts[] = [
    {
      picSrc: "/contact-man.jpg",
      picAlt: "Head of communications, Man",
      name: "Berg Devien",
      position: "Head of communications",
      email: "b.devien@dilandproperties.com",
      skype: "berg.property",
    },
    {
      picSrc: "/contact-woman.jpg",
      picAlt: "Head of communications, Woman",
      name: "Priscilla Sorvino",
      position: "Head of communications",
      email: "p.sorvino@dilandproperties.com",
      skype: "priscilla.property",
    },
  ];

  return (
    <div className="lg-xl-2:w-1/3">
      <h4 className="text-2xl xl-2xl:text-3xl">Your Contact</h4>
      <div className="mt-12 flex flex-col gap-6 items-center sm:items-start">
        {contacts.map(
          ({ picSrc, picAlt, name, position, email, skype }): JSX.Element => {
            return (
              <ContactItem
                key={name}
                picSrc={picSrc}
                picAlt={picAlt}
                name={name}
                position={position}
                email={email}
                skype={skype}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Contacts;
