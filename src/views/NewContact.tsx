import avatar2 from "../assets/avatar2.png";
import { useRef, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext.tsx";

///////////////////////////////////////////////////////////

const NewContact = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emaillRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const {
    addContact,
    setButtonOn,
    setTitleChange,
    agendaNameSlug,
    setAgendaNameSlug,
  } = useContext(DataContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addContact(
      nameRef.current?.value,
      emaillRef.current?.value,
      addressRef.current?.value,
      phoneRef.current?.value
    );
    setButtonOn(false);
    setTitleChange(false);
    console.log(agendaNameSlug);
    navigate(`/agenda/${agendaNameSlug}`);
  };

  const handleReturn = () => {
    setAgendaNameSlug("");
    setTitleChange(false);
    navigate("/agenda");
  };

  return (
    <div className="bg-box">
      <form onSubmit={handleSubmit}>
        <div>
          {/*HEADER */}
          <div className="sm:max-w-[640px] mx-auto ">
            <div className="flex justify-between items-center px-4 py-3 sm:py-5 rounded-t-lg sm:rounded-t-xl border-b-[3px] sm:border-b-[6px] border-b-blue bg-header ">
              {/*Content*/}

              <div className="flex items-center gap-2 w-[100%]">
                <div className="rounded-[6px]  bg-mediumblue px-[3px] pt-1  border-2  border-semiblue">
                  <img
                    src={avatar2}
                    alt="app logo"
                    className="object-contain w-[18px]  h-[18px]  mb-[-0.5px]"
                  />
                </div>

                <input
                  type="text"
                  ref={nameRef}
                  className="bg-transparent contact-name text-shadow  text-semiblue w-[100%]"
                  placeholder="&nbsp;Contact Name"
                  required
                  autoFocus
                />
              </div>
            </div>
            {/*PHONE LABEL*/}

            <div className="flex">
              <div className="  h-[50px]  label-info bg-label-info flex-1 px-4  f-start">
                <input
                  type="text"
                  ref={phoneRef}
                  className="bg-transparent w-[100%] contact-name text-shadow  text-semiblue"
                  placeholder="&nbsp;&nbsp;Phone Number"
                  required
                />
              </div>
            </div>
            {/*EMAIL LABEL*/}

            <div className="flex">
              <div className="h-[50px]  label-info bg-label-info flex-1 px-4  f-start ">
                <input
                  type="text"
                  ref={emaillRef}
                  className="bg-transparent w-[100%]  contact-name text-shadow  text-semiblue"
                  placeholder="&nbsp;&nbsp;Email Address"
                  required
                />
              </div>
            </div>
            {/*ADDRESS LABEL*/}

            <div className="flex rounded-b-lg sm:rounded-b-xl">
              <div className="h-[50px]  label-info bg-label-info flex-1 px-4  f-start ">
                <input
                  type="text"
                  ref={addressRef}
                  className="bg-transparent w-[100%] contact-name text-shadow  text-semiblue"
                  placeholder="&nbsp;&nbsp;Home Address"
                  required
                />
              </div>
            </div>
          </div>
          {/*BUTTONS*/}

          <div className="f-center mt-10">
            <button
              type="submit"
              className="btn btn-orange-input btn-text text-shadow me-4"
            >
              Submit
            </button>

            <button
              onClick={handleReturn}
              className="btn btn-orange-input btn-text text-shadow"
            >
              Return
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewContact;
