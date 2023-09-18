import { createContext, useState, useEffect, Dispatch, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface DataContextType {
  setContactList: Dispatch<React.SetStateAction<ContactInterface[]>>;
  buttonOn: boolean;
  setButtonOn: Dispatch<React.SetStateAction<boolean>>;
  titleChange: boolean;
  setTitleChange: Dispatch<React.SetStateAction<boolean>>;
  agendaNameSlug: string;
  setAgendaNameSlug: Dispatch<React.SetStateAction<string>>;

  agendaList: string[] | null;
  setAgendaList: Dispatch<React.SetStateAction<string[]>>;
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

  deleteAgenda: (agendaNameSlug: string) => void;

  updateContact: (
    fullName: string | undefined,
    email: string | undefined,
    phone: string | undefined,
    address: string | undefined,
    id: number
  ) => void;

  fetchContactList: () => void;

  fetchAgendaList: () => void;
}

//CONTEXT/////////////////////////////////////////////////////////////////////////////

const DataContext = createContext<DataContextType>({
  contactList: [],
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
  deleteAgenda: () => {},
  agendaNameSlug: "",
  setAgendaNameSlug: () => {},
  fetchContactList: () => {},
  fetchAgendaList: () => {},
  setAgendaList: () => {},
});

export interface ContactInterface {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  agenda_slug: string;
}

// PROVIDER////////////////////////////////////////////////////////////////////////

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [contactList, setContactList] = useState<ContactInterface[]>([]);

  const [agendaList, setAgendaList] = useState<string[]>([]);

  const [buttonOn, setButtonOn] = useState<boolean>(false);

  const [titleChange, setTitleChange] = useState<boolean>(false);

  const [agendaNameSlug, setAgendaNameSlug] = useState<string>("");

  ////////////////////////////////////////////////////////////////////////////////

  const navigate = useNavigate();
  ////////////////////////////////////////////////////////////////////////////////

  // API REQUESTS: /////////////////////////////////////////////////////////

  // GET ALL THE AGENDAS //

  const fetchAgendaList = () => {
    setTimeout(() => {
      fetch("https://playground.4geeks.com/apis/fake/contact/agenda")
        .then((response) => response.json())
        .then((result) => {
          //functions together, or problems:
          setAgendaList(result);
          // console.log(result);
        })
        .catch((error) => console.log("Error:", error));
    }, 1000);
  };

  ///////////////////////////////////////////////////////////////////////////

  // ADD AGENDA //

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
    console.log(newAgenda.agenda_slug);
    setAgendaNameSlug(newAgenda.agenda_slug);
    console.log(agendaNameSlug); // no funciona

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

  //Porque actua al refrescarse, si no hay cambio de agendaNAmeSlug?
  useEffect(() => {
    setAgendaNameSlug(agendaNameSlug);
    console.log(agendaNameSlug);
  }, [agendaNameSlug]);

  //////////////////////////////////////////////////////////////////////////////

  //DELETE AGENDA //

  const deleteAgenda = (agendaNameSlug: string) => {
    fetch(
      `https://playground.4geeks.com/apis/fake/contact/agenda/${agendaNameSlug}`,
      {
        method: "DELETE",
        redirect: "follow",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      // .then((response) => response.json())
      .then((response) => response.text()) // If it's not text, it gives a JSON error
      .then((result) => {
        console.log(result);
        setAgendaNameSlug(""); //solucion!!!! para que al eliminar se vaya otra vez a la pagina:
        navigate(`/agenda`);
        console.log(agendaNameSlug);
        fetchAgendaList();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  /////////////////////////////////////////////////////////////////////

  // It loads the contacts of an agenda once it is created(in fact, when there's a change in the agendaList):

  useEffect(() => {
    fetchContactList();
    // navigate(`/`);
  }, [agendaList]);

  ///////////////////////////////////////////////////////////////////////////////

  // GET THE CONTACTS OF AN AGENDA //

  const fetchContactList = () => {
    // setTimeout(() => {
    if (agendaNameSlug) {
      fetch(
        `https://playground.4geeks.com/apis/fake/contact/agenda/${agendaNameSlug}`
      )
        .then((response) => response.json())
        .then((result) => {
          //functions together, or problems:
          setContactList(result);
          // console.log(result);
        })
        .catch((error) => console.log("Error:", error));
    }
    // }, 1000);
  };

  // useEffect(() => {
  //   fetchContactList();
  // }, [agendaNameSlug]);

  ////////////////////////////////////////////////////////////////////////////

  // ADD CONTACT //

  const addContact = (
    fullName: string | undefined,
    email: string | undefined,
    address: string | undefined,
    phone: string | undefined
  ) => {
    const agendaSlug = agendaNameSlug;
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

  ////////////////////////////////////////////////////////////////////////////////////

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
        console.log(agendaNameSlug);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  /////////////////////////////////////////////////////////////////////////////////

  // UPDATE CONTACT //

  const updateContact = (
    fullName: string | undefined,
    email: string | undefined,
    address: string | undefined,
    phone: string | undefined,
    contactId: number
  ) => {
    const modifiedContact: ContactInterface = {
      id: contactId,
      full_name: fullName || "",
      email: email || "",
      phone: phone || "",
      address: address || "",
      agenda_slug: agendaNameSlug,
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

  ////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////

  //ONCE APP IS ON//

  useEffect(() => {
    fetchAgendaList();
  }, []);

  ////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////

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
        deleteAgenda,
        agendaNameSlug,
        setAgendaNameSlug,
        fetchContactList,
        fetchAgendaList,
        setAgendaList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
