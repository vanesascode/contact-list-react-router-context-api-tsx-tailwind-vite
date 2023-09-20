import logo from "../assets/agenda.svg";
import DataContext from "../context/DataContext.tsx";

import { useContext } from "react";

const AlertChooseAgenda = () => {
  // CONTEXT

  const { setAlertChooseAgenda } = useContext(DataContext);

  // NAVIGATE

  // FUNCTIONS
  const handleOk = () => {
    setAlertChooseAgenda(false);
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
          <p className="modal-text ">
            First choose an agenda or create a new one.
          </p>

          {/*BUTTONS*/}

          <div className="f-center mt-6">
            <button
              onClick={handleOk}
              className="btn btn-orange-input btn-text text-shadow me-2"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertChooseAgenda;
