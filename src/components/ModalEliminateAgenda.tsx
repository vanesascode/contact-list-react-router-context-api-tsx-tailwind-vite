import logo from "../assets/agenda.svg";
import DataContext from "../context/DataContext.tsx";
import { useContext, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

const ModalEliminateAgenda = () => {
  // CONTEXT

  const {
    setModalEliminateAgenda,
    agendaNameSlug,
    deleteAgenda,
    setAgendaDeleted,
    setAgendaNameSlug,
  } = useContext(DataContext);

  // NAVIGATE

  const navigate = useNavigate();

  // FUNCTIONS
  const handleNo = () => {
    setModalEliminateAgenda(false);
  };

  const handleDeleteAgenda = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (agendaNameSlug) {
      deleteAgenda(agendaNameSlug);
      setAgendaDeleted(true);
      setAgendaNameSlug("");
      setModalEliminateAgenda(false);
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex flex-col sm:mt-20 mt-20">
        {/*TITLE*/}
        <div className=" bg-orange p-nav space-between flex items-center mx-3">
          <div className="flex items-center gap-2 cursor-pointer ">
            <img src={logo} alt="logo" className="logo invert  " />

            <p className="title text-shadow capitalize">Wait...</p>
          </div>
        </div>

        {/*BODY*/}
        <div className="bg-modal ">
          <p className="modal-text">
            Are you sure you want to eliminate this agenda?
          </p>

          {/*BUTTONS*/}

          <div className="f-center mt-6">
            <button
              onClick={handleDeleteAgenda}
              className="btn btn-orange-input btn-text text-shadow me-2"
            >
              Yes
            </button>

            <button
              onClick={handleNo}
              className="btn btn-orange-input btn-text text-shadow ms-2"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEliminateAgenda;
