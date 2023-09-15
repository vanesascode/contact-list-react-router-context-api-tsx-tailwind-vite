import avatar2 from "../assets/avatar2.png";
import { useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

///////////////////////////////////////////////////////////

const ContactForm = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emaillRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const phone = phoneRef.current?.value;
    const email = emaillRef.current?.value;
    const address = addressRef.current?.value;
    console.log(name, phone, email, address);
    navigate("/");
  };

  return (
    <div className="bg-box">
      <form onSubmit={handleSubmit}>
        <div>
          {/*HEADER */}

          <div className="flex justify-between items-center px-3 sm:px-6 py-4 sm:py-6 rounded-t-lg sm:rounded-t-xl border-b-[3px] sm:border-b-[6px] border-b-blue bg-header mt-2">
            {/*Content*/}

            <div className="flex items-center gap-4">
              <div className=" rounded-[6px] sm:rounded-[8px] bg-mediumblue pt-0 sm:pt-1 px-1 sm:px-2  border-2 sm:border-4  border-semiblue w-[15%] flex justify-center">
                <img
                  src={avatar2}
                  alt="app logo"
                  className="object-contain w-[60px] sm:w-[85px] h-[48px] sm:h-[85px] sm:mb-[-6px] mb-[-6.5px]"
                />
              </div>

              <input
                type="text"
                ref={nameRef}
                className="bg-transparent input-name text-shadow w-[85%]"
                placeholder="&nbsp;Contact Name"
              />
            </div>
          </div>

          {/*PHONE LABEL*/}

          <div className="flex">
            <div className="h-[75px] sm:h-[125px] label-info bg-label-info flex-1 px-4 sm:px-8 f-start ">
              <input
                type="text"
                ref={phoneRef}
                className="bg-transparent w-[100%] input-name text-shadow"
                placeholder="&nbsp;&nbsp;Phone Number"
              />
            </div>
          </div>

          {/*EMAIL LABEL*/}

          <div className="flex">
            <div className="h-[75px] sm:h-[125px] label-info bg-label-info flex-1 px-4 sm:px-8 f-start ">
              <input
                type="text"
                ref={emaillRef}
                className="bg-transparent w-[100%] input-name text-shadow"
                placeholder="&nbsp;&nbsp;Email Address"
              />
            </div>
          </div>

          {/*ADDRESS LABEL*/}

          <div className="flex rounded-b-lg sm:rounded-b-xl">
            <div className="h-[75px] sm:h-[125px] label-info bg-label-info flex-1 px-4 sm:px-8 f-start  rounded-br-lg sm:rounded-br-xg">
              <input
                type="text"
                ref={addressRef}
                className="bg-transparent w-[100%] input-name text-shadow"
                placeholder="&nbsp;&nbsp;Home Address"
              />
            </div>
          </div>
          <div className="f-center mt-10">
            <button
              type="submit"
              className="btn btn-orange-input btn-text text-shadow"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
