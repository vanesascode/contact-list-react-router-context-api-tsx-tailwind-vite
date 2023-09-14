import logo from "../assets/logo-black.png";

type NavbarProps = {
  buttonOn: boolean;
  setButtonOn: (value: boolean) => void;
};

const Navbar = ({ buttonOn, setButtonOn }: NavbarProps) => {
  return (
    <>
      <div className="sm:max-container  bg-orange p-nav space-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="title">
            {buttonOn ? "New contact" : "My contact list"}
          </h1>
        </div>
        <button
          className={`btn btn-title ${
            buttonOn ? "btn-orange-on" : "btn-orange-off"
          }`}
          onClick={() => setButtonOn(!buttonOn)}
        >
          {buttonOn ? "Return" : "Add"}
        </button>
      </div>
    </>
  );
};

export default Navbar;
