import deletePic from "../assets/delete.svg";
import { useContext, MouseEvent, useState } from "react";
import ContactCard from "../components/ContactCard.tsx";
import DataContext from "../context/DataContext.tsx";
import { useNavigate } from "react-router-dom";
import plus from "../assets/plus.svg";
import { useParams } from "react-router-dom";

const ContactList = () => {
  // ROUTES PARAMS

  const { agendaNameSlug } = useParams();

  // NAVIGATE

  const navigate = useNavigate();

  // CONTEXT

  const { contactList, deleteAgenda } = useContext(DataContext);

  //STATES

  const [agendaDeleted, setAgendaDeleted] = useState(false);

  // FUNCTIONS

  const handleCreateContact = () => {
    navigate("/newcontact");
  };

  const handleDeleteAgenda = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (agendaNameSlug) {
      deleteAgenda(agendaNameSlug);
      setAgendaDeleted(true);
      navigate("/");
    }
  };

  //////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="bg-box relative">
        <div className=" ">
          {!agendaNameSlug && <div>Loading...</div>}
          {contactList && contactList.length === 0 && (
            <h1 className="capitalize title text-center mb-[130px]">
              {" "}
              {agendaDeleted
                ? `${agendaNameSlug} agenda deleted` // no hace caso
                : `Loading ${agendaNameSlug} contact list`}
            </h1>
          )}
          <div className="sm:grid-cols-2 sm:grid  gap-6 xl:grid-cols-3">
            {contactList &&
              contactList.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
          </div>

          <img
            src={plus}
            alt="add contact"
            height={"63px"}
            width={"63px"}
            onClick={handleCreateContact}
            className="fixed right-[10%] top-[70%] hidden max-sm:block"
          />
        </div>

        {/*DELETE AGENDA*/}

        <a
          href="/"
          onClick={handleDeleteAgenda}
          className="cursor-pointer flex justify-start sm:justify-center gap-2 mt-[100px] mb-1"
        >
          <img
            src={deletePic}
            alt="delete contact"
            className="w-[30px] h-[30px]"
          />
          <p className="contact-name capitalize">
            Delete {agendaNameSlug} agenda
          </p>
        </a>
      </div>
    </>
  );
};

export default ContactList;
