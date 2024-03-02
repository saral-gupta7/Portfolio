import React from "react";
import { useState } from "react";
import { styles } from "../styles";
import { socials } from "../constants";
import { logotr } from "../assets";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { navLinks } from "../constants";
const Footer = () => {
  const [active, setActive] = useState("");
  return (
    <div
      className={`${styles.padding} p-[20px] bg-gradient-to-r from-[#000000] to-[#000026] w-full h-[40rem] flex justify-between lg:items-start items-center gap-10  `}
      id="socials"
    >
      <div className="lg:flex hidden flex-col space-y-9">
        <img
          src={logotr}
          alt="logo"
          className="w-[15rem] h-[15rem] items-start"
        />
        <ul className="font-bebas font-light list-none flex flex-row  gap-[5rem] ml-[3.5rem]">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-[#FEE715] transition-all text-[25px] font-medium cursor-pointer`}
              onClick={() => {
                x;
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-between lg:items-end w-full items-center space-y-16 mt-8">
        <motion.h1 variants={textVariant()} className="">
          {/* <p className={styles.sectionSubText}></p> */}
          <h2 className={styles.sectionHeadText}>
            <span className="text-gray-400">Let&#39;s </span>Connect
          </h2>
        </motion.h1>

        <ul className="flex gap-10 flex-wrap">
          {socials.map((item) => (
            <a key={item.name} href={item.url} target="_blank">
              <img
                src={item.icon}
                width={40}
                height={40}
                alt={item.title}
                className=" transition-all rounded-full hover:scale-[1.5]"
              />
            </a>
          ))}
        </ul>

        <p className="text-secondary ">
          Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
