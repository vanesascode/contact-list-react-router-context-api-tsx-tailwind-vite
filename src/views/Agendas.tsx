import { useContext, MouseEvent, useEffect } from "react";
import DataContext from "../context/DataContext.tsx";
import avatar2 from "../assets/avatar2.png";

import { useNavigate } from "react-router-dom";

const Agendas = () => {
  //CONTEXT ////////////////////////////////////////////////////////////////////

  const { setAgendaNameSlug, fetchContactList, agendaNameSlug, agendaList } =
    useContext(DataContext);

  //////////////////////////////////////////////////////////////////////////

  // NAVIGATE ///////////////////////////////////////////////////////////////////

  const navigate = useNavigate();

  // FUNCTIONS ///////////////////////////////////////////////////////////////////

  // GET SLUG OF AGENDA ////////////////////////////////////////////

  const handleGetAgendaSlug = (event: MouseEvent<HTMLParagraphElement>) => {
    const value = event.currentTarget.textContent;
    console.log(value);

    if (value !== null) {
      setAgendaNameSlug(value);
      console.log(agendaNameSlug);
      navigate(`/agenda/${agendaNameSlug}`);
    }
  };

  //Since agendaNameSlug was only set when the user clicks twice on a new agenda: I recreate the two clicks in one here:

  useEffect(() => {
    if (agendaNameSlug !== null) {
      const event = {
        currentTarget: {
          textContent: agendaNameSlug,
        },
      };

      handleGetAgendaSlug(event as MouseEvent<HTMLParagraphElement>);
      fetchContactList();
    }
  }, [agendaNameSlug]);

  //////////////////////////////////////////////////////////////////////////

  return (
    <>
      {/*TITLE*/}

      <div className="bg-box">
        <div className="f-center mb-4">
          <h2 className="agendas-title">Choose an agenda:</h2>
        </div>

        {/* ERROR MESSAGES */}
        {!agendaList && (
          <div>No agendas were found. Please create a new one.</div>
        )}
        {agendaList && agendaList.length === 0 && (
          <div className=" f-center">
            <h1 className="title">Loading...</h1>
            {/* <p>
              If it takes too long, refresh. Maybe it's because no agendas were
              found. Then, please create a new one.
            </p> */}
          </div>
        )}

        {/* LIST OF AGENDAS */}
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {agendaList &&
            agendaList.map((agenda, value) => (
              <div className="max-sm:mb-4" key={value}>
                <div className="flex justify-between items-center px-3 sm:px-6 py-3 sm:py-5 rounded-t-lg sm:rounded-t-xl border-b-[3px] sm:border-b-[6px] border-b-blue bg-header w-[100%] cursor-pointer">
                  {/*Content left*/}

                  <div className="flex items-center gap-2">
                    <div className="rounded-[6px]  bg-mediumblue px-[3px] pt-1  border-2  border-semiblue">
                      <img
                        src={avatar2}
                        alt="app logo"
                        className="object-contain w-[18px]  h-[18px]  mb-[-0.5px]"
                      />
                    </div>
                    <div
                      onClick={handleGetAgendaSlug}
                      className="contact-name "
                    >
                      {agenda}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Agendas;
