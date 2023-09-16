import { useState, useContext } from "react";
import DataContext from "../context/DataContext.tsx";

const Home = () => {
  const { agendaList } = useContext(DataContext);

  const { addAgenda } = useContext(DataContext);

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
  };

  return (
    <>
      <div className="bg-box">
        {/* LIST OF AGENDAS */}
        <h2>Choose an agenda or create a new one</h2>

        {!agendaList && <div>Loading...</div>}
        {agendaList && agendaList.length === 0 && <h1>Loading...</h1>}

        {agendaList &&
          agendaList.map((contact, index) => <p key={index}>{contact}</p>)}

        {/* CREATE AN AGENDA */}
        <h2>Create a new agenda</h2>
        <input
          type="text"
          value={newAgenda}
          onChange={(e) => setnewAgenda(e.target.value)}
          placeholder="Add a new agenda"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddAgenda();
            }
          }}
          className="border-0 px-5 py-3 input fs-2 "
        />
      </div>
    </>
  );
};

export default Home;
