import { createContext, useState, useEffect, Dispatch, ReactNode } from "react";

interface ContactsContextType {
  contactList: ContactInterface[] | null;
  setContactList: Dispatch<React.SetStateAction<ContactInterface[]>>;
}

const ContactsContext = createContext<ContactsContextType>({
  contactList: null,
  setContactList: () => {},
});

export interface ContactInterface {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  agenda_slug: string;
}

export const ContactsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Every contact:
  // const [contact, setContact] = useState<ContactInterface>();

  // List of contacts:
  const [contactList, setContactList] = useState<ContactInterface[]>([]);

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

  return (
    <ContactsContext.Provider value={{ contactList, setContactList }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContext;
