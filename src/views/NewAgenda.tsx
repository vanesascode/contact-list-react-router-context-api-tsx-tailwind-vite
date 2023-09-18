import { useState, useContext } from "react";
import DataContext from "../context/DataContext.tsx";
import { useNavigate } from "react-router-dom";
import avatar2 from "../assets/avatar2.png";

const NewAgenda = () => {
  // NAVIGATE ////////////////////////////////////////////////////////

  const navigate = useNavigate();

  // CONTEXT //////////////////////////////////////////////////////////

  const { addAgenda, setAgendaNameSlug, setTitleChange } =
    useContext(DataContext);

  // ADD AGENDA ///////////////////////////////////////////////////////

  const [newAgenda, setnewAgenda] = useState("");

  const handleAddAgenda = () => {
    setAgendaNameSlug(newAgenda || "");
    const fullname = "";
    const email = "";
    const agendaslug = newAgenda;
    const address = "";
    const phone = "";
    if (newAgenda.trim() !== "") {
      addAgenda(fullname, email, agendaslug, address, phone);
      setnewAgenda("");
      setAgendaNameSlug(agendaslug);
      navigate(`/agenda/${agendaslug}`);
      setTitleChange(false);
    }
  };

  // GET SLUG OF AGENDA ////////////////////////////////////////////

  return (
    <>
      <div className="bg-box">
        {/* CREATE AN AGENDA */}
        <div className="sm:max-w-[640px] mx-auto ">
          <div className="flex justify-between items-center px-3 sm:px-6 py-3 sm:py-5 rounded-t-lg sm:rounded-t-xl border-b-[3px] sm:border-b-[6px] border-b-blue bg-header  ">
            {/*Content*/}

            <div className="flex items-center gap-2 w-[100%]">
              <div className="rounded-[6px]  bg-mediumblue px-[3px] pt-1  border-2  border-semiblue ">
                <img
                  src={avatar2}
                  alt="app logo"
                  className="object-contain w-[18px]  h-[18px]  mb-[-0.5px]"
                />
              </div>

              <input
                className="bg-transparent contact-name text-shadow  text-semiblue w-[100%]"
                type="text"
                value={newAgenda}
                onChange={(e) => setnewAgenda(e.target.value)}
                placeholder="&nbsp;Add a new agenda"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddAgenda();
                  }
                }}
                autoFocus
              />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="f-center mt-10">
          <button
            onClick={handleAddAgenda}
            className="btn btn-orange-input btn-text text-shadow"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default NewAgenda;
