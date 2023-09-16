import { useState, useContext, MouseEvent } from "react";
import DataContext from "../context/DataContext.tsx";
import { ContactInterface } from "../context/DataContext.tsx";
import avatar2 from "../assets/avatar2.png";

import { Link } from "react-router-dom";

const Home = () => {
  const { agendaList } = useContext(DataContext); //fetchContactListBySlug

  const { addAgenda, deleteAgenda, contactList } = useContext(DataContext);

  const [newAgenda, setnewAgenda] = useState("");

  const handleAddAgenda = () => {
    const fullname = "";
    const email = "";
    const agendaslug = newAgenda;
    const address = "";
    const phone = "";
    if (newAgenda.trim() !== "") {
      addAgenda(fullname, email, agendaslug, address, phone);
    }
    setnewAgenda("");
  };

  //Make sure that you are accessing the agenda_slug property on an individual object, not on the array itself:

  const contacts: ContactInterface[] | null = contactList; // your array of contacts
  const firstContact = contacts && contacts.length > 0 ? contacts[0] : null; // get the first contact
  const agendaSlug = firstContact && firstContact.agenda_slug; // access the agenda_slug property

  const handleDeleteAgenda = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (agendaSlug) {
      deleteAgenda(agendaSlug);
    }
  };

  return (
    <>
      <div className="bg-box">
        {/* CREATE AN AGENDA */}

        <div className="flex justify-between items-center px-3 sm:px-6 py-3 sm:py-5 rounded-t-lg sm:rounded-t-xl border-b-[3px] sm:border-b-[6px] border-b-blue bg-header ">
          {/*Content*/}

          <div className="flex items-center gap-2">
            <div className="rounded-[6px]  bg-mediumblue px-[3px] pt-1  border-2  border-semiblue">
              <img
                src={avatar2}
                alt="app logo"
                className="object-contain w-[18px]  h-[18px]  mb-[-0.5px]"
              />
            </div>

            <input
              className="bg-transparent contact-name text-shadow  text-semiblue w-[200px]"
              type="text"
              value={newAgenda}
              onChange={(e) => setnewAgenda(e.target.value)}
              placeholder="Add a new agenda"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddAgenda();
                }
              }}
            />
          </div>
        </div>

        {/* LIST OF AGENDAS */}
        <h2 className="text-black text-lg font-bold">
          Choose an agenda or create a new one
        </h2>

        {!agendaList && <div>Loading...</div>}
        {agendaList && agendaList.length === 0 && <h1>Loading...</h1>}

        {agendaList &&
          agendaList.map((contact, index) => (
            <div key={index}>
              <div className="flex gap-5">
                <Link
                  to={`/agenda/${index}`}
                  // onClick={() => fetchContactListBySlug(agendaSlug)}
                >
                  {contact}
                </Link>
                <button onClick={handleDeleteAgenda}>erase</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
