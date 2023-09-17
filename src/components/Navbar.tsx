import logo from "../assets/agenda.svg";
import hamburger from "../assets/hamburger.png";
import { Link } from "react-router-dom";

import DataContext from "../context/DataContext.tsx";
import { useContext } from "react";

const Navbar = () => {
  const { buttonOn, setButtonOn, titleChange, setTitleChange, agendaNameSlug } =
    useContext(DataContext);

  const handleLinkClick = () => {
    setTitleChange(true);
    setButtonOn(false);
  };

  const handleLinksClick2 = () => {
    setButtonOn(false);
    setTitleChange(false);
  };

  const handleLinksClick3 = () => {
    setButtonOn(false);
    setTitleChange(false);
    // navigate("/agenda");
  };

  return (
    <>
      <div className=" bg-orange p-nav space-between flex items-center ">
        {/*LEFT SIDE*/}
        <Link to="/">
          <div
            className="flex items-center gap-2 cursor-pointer "
            onClick={() => setTitleChange(false)}
          >
            <img src={logo} alt="logo" className="logo invert  " />

            <p className="title text-shadow capitalize">
              {titleChange
                ? "New contact"
                : { agendaNameSlug } && `${agendaNameSlug} list`}
              {/* {contact.agenda_slug} */}
            </p>
          </div>
        </Link>

        {/*RIGHT SIDE*/}

        {/* LINKS WHEN SCREEN BIG */}

        <ul className="flex-1 flex justify-end items-center xl:gap-10 sm:gap-8 max-lg:hidden gap-5  links-nav ">
          <Link to="/newcontact">
            <li className="me-3">
              <p className="font-bold up">New contact</p>
            </li>
          </Link>
          <Link to="/newagenda">
            <li className="me-3">
              <p className="font-bold up ">New agenda</p>
            </li>
          </Link>
          {/* <Link to="/agenda"> */}
          <li className="me-3">
            <a href="/agenda">
              <p className="font-bold up ">Agendas</p>
            </a>
          </li>
          {/* </Link> */}
        </ul>

        {/* LINKS WHEN SCREEN SMALL */}

        <div className="hidden max-lg:block ">
          {/* Toggle button */}
          <img
            src={hamburger}
            alt="hamburger"
            width={30}
            height={30}
            onClick={() => setButtonOn((prev) => !prev)}
            className="invert cursor-pointer me-3 sm:h-[50px] sm:w-[50px] "
          />

          <div
            className={`${
              !buttonOn ? "hidden" : "flex"
            } p-6 absolute top-[60px] sm:top-[95px] right-[3px]  min-w-[140px] rounded-[10px] text-shadow bg-orange z-10 `}
          >
            {/* Links */}
            <ul className="list-none flex items-center flex-1 flex-col links-hamburger justify-center gap-3 sm:gap-4 ">
              <Link to="/newcontact">
                <li>
                  <p onClick={handleLinkClick}>New contact</p>
                </li>
              </Link>
              <Link to="/newagenda">
                <li>
                  <p onClick={handleLinksClick2}>New Agenda</p>
                </li>
              </Link>
              {/* <Link to="/agenda"> */}
              <li>
                <a href="/agenda">
                  <p onClick={handleLinksClick3}>Agendas</p>
                </a>
              </li>
              {/* </Link> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
