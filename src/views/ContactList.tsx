import { useState, useEffect } from "react";
import Contact from "../components/Contact.tsx";

interface ContactInterface {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  agenda_slug: string;
}

const ContactList = () => {
  // Every contact:
  // const [contact, setContact] = useState<ContactInterface>();

  // List of contacts:
  const [contactList, setContactList] = useState<ContactInterface[]>(
    [] || null
  );

  // API REQUESTS: /////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////

  // CREATE CONTACT (AND SO AN AGENDA) //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////

  // GET THE DATA ///////////////////////////////////////////////////////////////////

  const fetchContactList = () => {
    setTimeout(() => {
      fetch(
        "https://playground.4geeks.com/apis/fake/contact/agenda/vanesascode"
      )
        .then((response) => response.json())
        .then((result) => {
          //functions together, or problems:
          setContactList(result);
          console.log(result);
        })
        .catch((error) => console.log("Error:", error));
    }, 1000);
  };

  useEffect(() => {
    fetchContactList();
  }, []);

  ///////////////////////////////////////////////////////////

  return (
    <>
      {/* tasks*/}

      {/* {!contactList && <div>Loading contact list...</div>} */}
      {contactList && contactList.length === 0 && (
        <h1>Loading contact list...</h1>
      )}

      {contactList &&
        contactList.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </>
  );
};

export default ContactList;
export type { ContactInterface };
