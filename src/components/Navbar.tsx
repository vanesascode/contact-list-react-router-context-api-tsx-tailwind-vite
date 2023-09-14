import logo from "../assets/logo-black.png";
import { useNavigate } from "react-router-dom";

type NavbarProps = {
  buttonOn: boolean;
  setButtonOn: (value: boolean) => void;
};

const Navbar = ({ buttonOn, setButtonOn }: NavbarProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setButtonOn(!buttonOn);
    navigate(buttonOn ? "/" : "/new");
  };

  return (
    <>
      <div className=" bg-orange p-nav space-between">
        <div className="flex items-center gap-3" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="logo invert" />
          <h1 className="title">
            {buttonOn ? "New contact" : "My contact list"}
          </h1>
        </div>
        <button
          className={`btn btn-title ${
            buttonOn ? "btn-orange-on" : "btn-orange-off"
          }`}
          onClick={handleClick}
        >
          {buttonOn ? "Return" : "Add"}
        </button>
      </div>
    </>
  );
};

export default Navbar;
