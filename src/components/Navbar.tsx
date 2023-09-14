import logo from "../assets/logo-black.png";
import { useNavigate } from "react-router-dom";
// import { ContactInterface } from "../context/ContactsContext.tsx";

type NavbarProps = {
  buttonOn: boolean;
  setButtonOn: (value: boolean) => void;
};

// interface ContactProps {
//   contact: ContactInterface;
// }

const Navbar = ({ buttonOn, setButtonOn }: NavbarProps) =>
  // { contact }: ContactProps
  {
    const navigate = useNavigate();

    const handleButton = () => {
      setButtonOn(!buttonOn);
      navigate(buttonOn ? "/" : "/new");
    };

    const handleTitle = () => {
      setButtonOn((buttonOn = false));
      navigate("/");
    };

    return (
      <>
        <div className=" bg-orange p-nav space-between items-end">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleTitle}
          >
            <img
              src={logo}
              alt="logo"
              className="logo invert ms-1 "
              style={{ alignSelf: "flex-start" }}
            />
            <p className="title text-shadow capitalize">
              {buttonOn ? "New contact" : "vanesascode agenda"}
              {/* {contact.agenda_slug} */}
            </p>
          </div>
          <button
            className={`btn btn-text ${
              buttonOn ? "btn-orange-on" : "btn-orange-off"
            }`}
            onClick={handleButton}
          >
            {buttonOn ? "Return" : "Add"}
          </button>
        </div>
      </>
    );
  };

export default Navbar;
