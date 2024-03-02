import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logox, logotr } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 relative top-0 z-20 bg-transparent`}
    >
      <div className="w-full flex justify-center items-center max-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logotr}
            alt="logo"
            className="sm:w-[9rem] sm:h-[9rem] w-[6rem] h-[6rem] object-contain justify-center "
          />
        </Link>
        <ul className="fixed top-[45rem] list-none hidden sm:flex flex-row gap-[7rem] bg-black  rounded-full p-7 shadow-inner shadow-blue-400">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white border-b-2"
                  : "text-secondary"
              } hover:text-[#FEE715] transition-all text-[19px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-8 bg-transparent absolute top-[6.5rem] right-0 mx-0 top-z min-w-[160px] w-full z-10 rounded-[0.5rem] animate-fade-down animate-duration-[600ms]`}
          >
            <ul className=" w-full list-none flex justify-between items-center flex-row ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
