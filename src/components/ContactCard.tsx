import { ContactInterface } from "../context/ContactsContext.tsx";
import avatar2 from "../assets/avatar2.png";
import editContact from "../assets/edit.svg";
import deleteContact from "../assets/delete.svg";

interface ContactProps {
  contact: ContactInterface;
}

const ContactCard = ({ contact }: ContactProps) => {
  return (
    <>
      <div className="mb-4 sm:mb-8">
        {/*HEADER */}

        <div className="flex  justify-between items-center px-3 sm:px-6 py-2 sm:py-3 rounded-t-lg sm:rounded-t-xl border-b-[3px] sm:border-b-[6px] border-b-blue bg-header">
          {/*Content left*/}

          <div className="flex items-center gap-2">
            <div className=" rounded-[6px] sm:rounded-[8px] bg-mediumblue px-[3px] sm:px2 pt-1 sm:pt-2 border-2 sm:border-4  border-semiblue">
              <img
                src={avatar2}
                alt="app logo"
                className="object-contain w-[18px] sm:w-[65px] h-[18px] sm:h-[65px]  sm:mb-[-1.5px] mb-[-0.5px]"
              />
            </div>
            <h2 className="contact-name text-shadow">{contact.full_name}</h2>
          </div>

          {/*Content right*/}

          <div className="flex gap-4 items-center">
            <img src={editContact} alt="edit contact" />
            <img src={deleteContact} alt="delete contact" />
          </div>
        </div>

        {/*PHONE LABEL*/}

        <div className="flex">
          <div className="  h-[50px] sm:h-[100px] bg-header bg-label label-name f-center px-4 sm:px-8 w-[80px] sm:w-[160px]">
            Phone
            <br />
            Number
          </div>
          <div className="   h-[50px] sm:h-[100px] label-info bg-label-info flex-1 px-4 sm:px-8 f-start">
            {contact.phone}
          </div>
        </div>

        {/*EMAIL LABEL*/}

        <div className="flex">
          <div className="   h-[50px] sm:h-[100px] bg-header bg-label label-name f-center px-4  sm:px-8 w-[80px] sm:w-[160px]">
            Email
            <br />
            Address
          </div>
          <div className="  h-[50px] sm:h-[100px] label-info bg-label-info flex-1 px-4 sm:px-8 f-start text-shadow">
            {contact.email}
          </div>
        </div>

        {/*ADDRESS LABEL*/}

        <div className="flex rounded-b-lg sm:rounded-b-xl">
          <div className="   h-[50px] sm:h-[100px] bg-header bg-label label-name f-center px-4  sm:px-8 w-[80px] sm:w-[160px] rounded-bl-lg sm:rounded-bl-xg">
            Home
            <br />
            Address
          </div>
          <div className="  h-[50px] sm:h-[100px] label-info bg-label-info flex-1 px-4 sm:px-8 f-start text-shadow rounded-br-lg sm:rounded-br-xg">
            {contact.address}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
