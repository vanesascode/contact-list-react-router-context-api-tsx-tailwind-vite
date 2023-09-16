import { createContext, useState, useEffect, Dispatch, ReactNode } from "react";

interface DataContextType {
  setContactList: Dispatch<React.SetStateAction<ContactInterface[]>>;
  buttonOn: boolean;
  setButtonOn: Dispatch<React.SetStateAction<boolean>>;
  titleChange: boolean;
  setTitleChange: Dispatch<React.SetStateAction<boolean>>;

  agendaList: string[] | null;
  contactList: ContactInterface[] | null;

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

  deleteAgenda: (agendaSlug: string) => void;

  updateContact: (
    fullName: string | undefined,
    email: string | undefined,
    phone: string | undefined,
    address: string | undefined,
    id: number
  ) => void;

  // fetchContactListBySlug: (agendaSlug: string) => void;
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
  // fetchContactListBySlug: () => {},
  deleteAgenda: () => {},
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

  // GET THE CONTACTS OF AN AGENDA ///////////////////////////////////////////////////////////////////

  // const fetchContactListBySlug = (agendaSlug: string) => {
  //   fetch(`https://api.example.com/contact/agenda/${agendaSlug}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Assuming the response is an array of contacts
  //       setAgendaList(data);
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  // };

  //////////////////////////////////////////////////////////////////

  // ADD AGENDA //////////////////////////////////////////////////////

  const addAgenda = (
    fullName: string | undefined,
    email: string | undefined,
    agendaslug: string,
    address: string | undefined,
    phone: string | undefined
  ) => {
    const newAgenda: Omit<ContactInterface, "id"> = {
      full_name: fullName || "new",
      email: email || "new",
      phone: phone || "new",
      address: address || "new",
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

  // GET THE CONTACTS OF VANESASCODE ///////////////////////////////////////////////////////////////////

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

  ///////////////////////////////////////////////////////////

  //DELETE AGENDA //

  const deleteAgenda = (agendaSlug: string) => {
    fetch(
      `https://playground.4geeks.com/apis/fake/contact/agenda/${agendaSlug}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    fetchAgendaList();
    fetchContactList();
  }, [agendaList]);

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
        // fetchContactListBySlug,
        deleteAgenda,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
