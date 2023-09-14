import { ContactInterface } from "../views/ContactList.tsx";
import avatar2 from "../assets/avatar2.png";

interface ContactProps {
  contact: ContactInterface;
}

const ContactCard = ({ contact }: ContactProps) => {
  return (
    <div>
      <div className="flex gap-3 ">
        <div className=" rounded-[8px] sm:rounded-[16px] bg-mediumblue px-1 sm:px2 pt-2 sm:pt-4 border-2 sm:border-4  border-semiblue">
          <img
            src={avatar2}
            alt="app logo"
            className="object-contain w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] mb-[-2px] sm:mb-[-4px]"
          />
        </div>
        {contact.full_name}
      </div>
      {contact.full_name} {contact.email} {contact.phone} {contact.address}{" "}
      {contact.agenda_slug}
    </div>
  );
};

export default ContactCard;
