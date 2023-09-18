import deletePic from "../assets/delete.svg";
import { useContext } from "react";
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

  const { contactList, agendaDeleted, setModalEliminateAgenda } =
    useContext(DataContext);

  // FUNCTIONS

  const handleCreateContact = () => {
    navigate("/newcontact");
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

        <div
          // href="/"
          // onClick={handleDeleteAgenda}
          onClick={() => setModalEliminateAgenda(true)}
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
        </div>
      </div>
    </>
  );
};

export default ContactList;
