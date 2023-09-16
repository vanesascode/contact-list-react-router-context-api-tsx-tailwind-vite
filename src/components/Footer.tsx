const Footer = () => {
  return (
    <div id="about">
      <div className=" bg-orange p-nav space-between flex items-center">
        {/*TOP*/}

        <ul className="flex-1 f-center sm:gap-7 gap-5 links-nav">
          <li className="sm:my-3 ">
            <a
              href="https://github.com/vanesascode"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-github fa-2xl up"
                style={{ color: "#ffff" }}
              ></i>
            </a>
          </li>

          <li className="sm:my-3 ">
            <a
              href="https://www.linkedin.com/in/vanesajuarezparis/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-linkedin fa-2xl up"
                style={{ color: "#ffff" }}
              ></i>
            </a>
          </li>

          <li className="sm:my-3 ">
            <a href="mailto:vanesascode@gmail.com?subject=&body=">
              <i
                className="fa-solid fa-envelope fa-2xl up"
                style={{ color: "#ffffff" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>

      {/*BOTTOM */}

      <div className="f-center gap-2 cursor-pointer p-nav bg-black ">
        <p className="signature text-shadow capitalize py-1">
          <a
            href="https://github.com/vanesascode"
            target="_blank"
            rel="noreferrer"
          >
            By Vanesascode
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
