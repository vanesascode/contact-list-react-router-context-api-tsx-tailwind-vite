import logo from "../assets/agenda.svg";
import hamburger from "../assets/hamburger.png";
// import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import DataContext from "../context/DataContext.tsx";
import { useContext } from "react";

// import { useParams } from "react-router-dom";

const Navbar = () => {
  // CONTEXT ////////////////////////////////

  // const agendaNameSlug = useParams();

  const {
    buttonOn,
    setButtonOn,
    titleChange,
    setTitleChange,
    agendaNameSlug,
    setAlertChooseAgenda,
    // fetchContactList,
  } = useContext(DataContext);

  //NAVIGATE ////////////////////////////

  const Navigate = useNavigate();

  // useEffect(() => {
  //   fetchContactList(agendaNameSlug);
  // });

  const handleLinkClick = () => {
    setTitleChange(false);
    setButtonOn(false);
    if (agendaNameSlug) {
      Navigate("/newcontact");
    } else {
      setAlertChooseAgenda(true);
      Navigate("/agenda");
    }
  };

  const handleLinksClick2 = () => {
    setButtonOn(false);
    setTitleChange(true);
  };

  const handleLinksClick3 = () => {
    setButtonOn(false);
    setTitleChange(false);
    // navigate("/agenda");
  };

  return (
    <>
      <div className=" bg-orange p-nav">
        <div className="sm:max-container space-between flex items-center">
          {/*LEFT SIDE*/}
          <Link to="/">
            <div
              className="flex items-center gap-2 cursor-pointer "
              onClick={() => setTitleChange(false)}
            >
              <img src={logo} alt="logo" className="logo invert  " />

              <p className="title text-shadow capitalize">
                {titleChange
                  ? "New agenda"
                  : { agendaNameSlug } && `${agendaNameSlug} contact list`}
              </p>
            </div>
          </Link>

          {/*RIGHT SIDE*/}

          {/* LINKS WHEN SCREEN BIG */}

          <ul className="flex-1 flex justify-end items-center xl:gap-8 sm:gap-2 max-lg:hidden gap-5  links-nav ">
            <li className="me-3" onClick={handleLinkClick}>
              <p className="font-bold up cursor-pointer">New contact</p>
            </li>

            <Link to="/newagenda">
              <li className="me-3">
                <p className="font-bold up " onClick={handleLinksClick2}>
                  New agenda
                </p>
              </li>
            </Link>
            {/* <Link to="/agenda"> */}
            <li className="me-3">
              <a href="/">
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
                <li>
                  <p onClick={handleLinkClick}>New contact</p>
                </li>

                <Link to="/newagenda">
                  <li>
                    <p onClick={handleLinksClick2}>New Agenda</p>
                  </li>
                </Link>
                {/* <Link to="/agenda"> */}
                <li>
                  <a href="/">
                    <p onClick={handleLinksClick3}>Agendas</p>
                  </a>
                </li>
                {/* </Link> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
