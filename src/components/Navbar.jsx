import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logotr } from "../assets";

const Navbar = () => {
  const [showBackground, setshowBackground] = useState(false);
  const TOP_OFFSET = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setshowBackground(true);
      } else {
        setshowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} ${
        showBackground
          ? "bg-[#000710] backdrop-blur-sm opacity-95 ease-in-out transition-all duration-[700ms]"
          : "sm:bg-none bg-[#000710] ease-in-out transition-all duration-[400ms]"
      } w-full flex fixed py-1 top-0 z-20 font-grotesk`}
    >
      <div className="w-full flex justify-between">
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
            className="sm:w-[9rem] sm:h-[6rem] w-[5rem] h-[5rem] object-contain"
          />
        </Link>
        <ul className="list-none hidden lg:flex gap-[3rem] items-center justify-center p-[1rem]">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white border-[#4d4dff] border-b-2"
                  : "text-secondary"
              } hover:text-[#fff]  transition-all md:text-[16px] font-[16px]  cursor-pointer uppercase last:border-[2px] last:border-[#4d4dff] last:p-3 last:text-[14px] last:text-white last:rounded-sm last:hover:bg-[#4d4dff] last:font-bold`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
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
              !toggle
                ? "hidden"
                : "flex animate-flip-down animate-duration-[400ms]"
            } p-8 flex ${
              showBackground ? "bg-[#000710]" : "bg-[#000710]"
            } absolute top-[5.5rem] right-0 mx-0 top-z min-w-[160px] h-screen items-center w-full z-10 rounded-[0.5rem] `}
          >
            <ul className=" w-full list-none flex flex-col gap-[6rem] items-center flex-wrap">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-grotesk font-medium cursor-pointer text-[20px] hover:text-white  transition-all uppercase`}
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
