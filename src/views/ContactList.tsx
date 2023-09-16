import { useContext } from "react";
import ContactCard from "../components/ContactCard.tsx";
import DataContext from "../context/DataContext.tsx";
import { useNavigate } from "react-router-dom";
import plus from "../assets/plus.svg";
// import { useParams } from "react-router-dom";

const ContactList = () => {
  // const { id } = useParams();
  const navigate = useNavigate();

  const handleCreateContact = () => {
    setTitleChange(true);
    navigate("/newcontact");
  };

  const { contactList, setTitleChange } = useContext(DataContext);
  return (
    <>
      <div className="bg-box">
        <div className="relative ">
          <div className="sm:grid-rows-2 sm:grid sm:grid-flow-col gap-6">
            {!contactList && <div>Loading...</div>}
            {contactList && contactList.length === 0 && <h1>Loading...</h1>}

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
            className="fixed right-[12%] bottom-[7%] hidden max-sm:block"
          />
        </div>
      </div>
    </>
  );
};

export default ContactList;
