import { useContext } from "react";
import ContactCard from "../components/ContactCard.tsx";
import ContactsContext from "../context/ContactsContext.tsx";

const ContactList = () => {
  const { contactList } = useContext(ContactsContext);
  return (
    <>
      <div className="bg-box">
        {/* {!contactList && <div>Loading contact list...</div>} */}
        {contactList && contactList.length === 0 && (
          <h1>Loading contact list...</h1>
        )}

        {contactList &&
          contactList.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
      </div>
    </>
  );
};

export default ContactList;
