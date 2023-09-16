import { createContext, useState, useEffect, Dispatch, ReactNode } from "react";

interface DataContextType {
  contactList: ContactInterface[] | null;
  setContactList: Dispatch<React.SetStateAction<ContactInterface[]>>;
  buttonOn: boolean;
  setButtonOn: Dispatch<React.SetStateAction<boolean>>;
  titleChange: boolean;
  setTitleChange: Dispatch<React.SetStateAction<boolean>>;

  agendaList: string[];

  addAgenda: (
    fullName: string | undefined,
    email: string | undefined,
    agendaslug: string,
    address: string | undefined,
    phone: string | undefined
  ) => void;

  addContact: (
    fullName: string | undefined,
    phone: string | undefined,
    email: string | undefined,
    address: string | undefined
  ) => void;

  deleteContact: (id: number) => void;

  updateContact: (
    fullName: string | undefined,
    email: string | undefined,
    phone: string | undefined,
    address: string | undefined,
    id: number
  ) => void;
}

//CONTEXT/////////////////////////////////

const DataContext = createContext<DataContextType>({
  contactList: null,
  setContactList: () => {},
  buttonOn: false,
  setButtonOn: () => {},
  titleChange: false,
  setTitleChange: () => {},
  addContact: () => {},
  deleteContact: () => {},
  updateContact: () => {},
  addAgenda: () => {},
  agendaList: [],
});

export interface ContactInterface {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  agenda_slug: string;
}

// PROVIDER//////////////////////

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [contactList, setContactList] = useState<ContactInterface[]>([]);

  const [agendaList, setAgendaList] = useState<string[]>([]);

  const [buttonOn, setButtonOn] = useState<boolean>(false);

  const [titleChange, setTitleChange] = useState<boolean>(false);

  // API REQUESTS: /////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////

  // ADD AGENDA ////////////////////////////////////////////////////////////////

  const addAgenda = (
    fullName: string | undefined,
    email: string | undefined,
    agendaslug: string,
    address: string | undefined,
    phone: string | undefined
  ) => {
    const newAgenda: Omit<ContactInterface, "id"> = {
      full_name: fullName || "",
      email: email || "",
      phone: phone || "",
      address: address || "",
      agenda_slug: agendaslug || "",
    };
    console.log(newAgenda);

    fetch("https://playground.4geeks.com/apis/fake/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAgenda),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result); //{msg: 'Contact created successfully'}
        fetchAgendaList();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  ////////////////////////////////////////////////////////////

  // GET ALL THE AGENDAS ///////////////////////////////////////////////////////////////////

  const fetchAgendaList = () => {
    setTimeout(() => {
      fetch("https://playground.4geeks.com/apis/fake/contact/agenda")
        .then((response) => response.json())
        .then((result) => {
          //functions together, or problems:
          setAgendaList(result);
          console.log(result);
        })
        .catch((error) => console.log("Error:", error));
    }, 1000);
  };

  useEffect(() => {
    fetchAgendaList();
  }, []);

  ////////////////////////////////////////////////////////////

  // GET THE CONTACTS OF AN AGENDA ///////////////////////////////////////////////////////////////////

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

  // ADD TASKS //

  const addContact = (
    fullName: string | undefined,
    email: string | undefined,
    address: string | undefined,
    phone: string | undefined
  ) => {
    const agendaSlug = "vanesascode";
    const newContact: Omit<ContactInterface, "id"> = {
      full_name: fullName || "",
      email: email || "",
      phone: phone || "",
      address: address || "",
      agenda_slug: agendaSlug,
    };
    console.log(newContact);

    fetch("https://playground.4geeks.com/apis/fake/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result); //{msg: 'Contact created successfully'}
        fetchContactList();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  ////////////////////////////////////////////////////////////

  // DELETE CONTACT //

  const deleteContact = (contactId: number) => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        fetchContactList();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  ///////////////////////////////////////////////////////

  //UPDATE  CONTACT ///

  const updateContact = (
    fullName: string | undefined,
    email: string | undefined,
    address: string | undefined,
    phone: string | undefined,
    contactId: number
  ) => {
    const agendaSlug = "vanesascode";
    const modifiedContact: ContactInterface = {
      id: contactId,
      full_name: fullName || "",
      email: email || "",
      phone: phone || "",
      address: address || "",
      agenda_slug: agendaSlug,
    };
    console.log(modifiedContact);

    fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedContact),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result); //{msg: 'Contact created successfully'}
        fetchContactList();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  ////////////////////////////////////////////////////////////
  return (
    <DataContext.Provider
      value={{
        contactList,
        setContactList,
        buttonOn,
        setButtonOn,
        addContact,
        deleteContact,
        updateContact,
        addAgenda,
        agendaList,
        titleChange,
        setTitleChange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
