type NavbarProps = {
  buttonOn: boolean;
  setButtonOn: (value: boolean) => void;
};

const Navbar = ({ buttonOn, setButtonOn }: NavbarProps) => {
  return (
    <>
      <div className="sm:max-container  bg-orange p-nav space-between">
        <h1 className={`title ${buttonOn ? "text-white" : "text-clear"}`}>
          {buttonOn ? "New contact" : "My contact list"}
        </h1>
        <button
          className={`btn btn-title ${
            buttonOn ? "btn-orange-on text-clear" : "btn-orange-off text-white"
          }`}
          onClick={() => setButtonOn(!buttonOn)}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Navbar;
